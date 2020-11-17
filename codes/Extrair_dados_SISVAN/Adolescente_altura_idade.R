library(rvest)
library(httr)
library(dplyr)
library(tidyverse)

adolescente_altura_idade <- function(ano){

  # ACESSA OS DADOS NO SISVAN

  y <- as.character(ano)

  pgsession <- html_session("https://sisaps.saude.gov.br/sisvan/relatoriopublico/index")
  pgform <- html_form(read_html(pgsession))[[1]]
  filled_form <- set_values(pgform, "nuAno" = y)
  filled_form <- set_values(filled_form, "tpFiltro" = "M")
  filled_form <- set_values(filled_form, "coUfIbge" = "99")
  filled_form <- set_values(filled_form, "nuMes[]" = "99")
  filled_form <- set_values(filled_form, "coMunicipioIbge" = "99")
  filled_form <- set_values(filled_form, "tpAbrangenciaEas" = "")
  filled_form <- set_values(filled_form, "nu_ciclo_vida" = "2")
  filled_form <- set_values(filled_form, "nu_indice_ado" = "1")
  result <- submit_form(pgsession,filled_form, submit='verTela')
  x <- html_table(result, fill = TRUE, dec = ",")
  z <- as.data.frame(x)

  # RETIRA A PRIMEIRA LINHA E AS COLUNAS REPETIDAS E COM PORCENTAGENS
  z <- z[-c(1),c(4, 5, 6, 8, 10, 12)]

  # RENOMEIA AS VARIÁVEIS
  z <- z %>%
    rename(codigo_municipio = 1,
           municipio = 2,
           altura_muito_baixa_para_a_idade = 3,
           altura_baixa_para_a_idade = 4,
           altura_adequada_para_a_idade = 5,
           total = 6)

  # EXCLUI AS LINHAS COM VALORES "TOTAL"
  z <- z %>%
    filter(str_detect(municipio, "TOTAL", negate = TRUE))

  # SALVA O ARQUIVO EM CSV
  file_name <- paste("D:\FelipeStrozberg\Dev\Projetos\sisvan",as.character(y),".csv", collapse = NULL)
  write.csv(z, file_name, row.names = FALSE)

}

periodo <- c(2008 : 2019)

sapply(periodo, adolescente_altura_idade)
