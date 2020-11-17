const fetch = require('node-fetch');

module.exports = {
    allReqs: async (year, type) => {
        let bodies = {
            childHeightAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=3&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            childIMCAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=4&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            childHeightWeight: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=2&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            childWeightAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=1&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            adultIMC: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=3&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=3&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            pregnantIMC: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=5&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=1&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            oldPersonIMC: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=4&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=1&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            teenagerHeightAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=2&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=1&nu_indice_ado=1&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            teenagerIMCAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=2&nu_idade_inicio=0&nu_idade_fim=5&nu_indice_cri=1&nu_indice_ado=2&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            escolarHeightAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=5&nu_idade_fim=10&nu_indice_cri=3&nu_indice_ado=2&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            escolarIMCAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=5&nu_idade_fim=10&nu_indice_cri=4&nu_indice_ado=2&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
            escolarWeightAge: `tpRelatorio=2&coVisualizacao=1&nuAno=${year}&nuMes%5B%5D=99&tpFiltro=M&coRegiao=&coUfIbge=99&coMunicipioIbge=99&noRegional=&st_cobertura=99&nu_ciclo_vida=1&nu_idade_inicio=5&nu_idade_fim=10&nu_indice_cri=1&nu_indice_ado=2&nu_idade_ges=99&ds_sexo2=1&ds_raca_cor2=99&co_sistema_origem=0&CO_POVO_COMUNIDADE=TODOS&CO_ESCOLARIDADE=TODOS&verTela=`,
        };

        return await fetch("https://sisaps.saude.gov.br/sisvan/relatoriopublico/estadonutricional", {
            "headers": {
                Referer: "https://sisaps.saude.gov.br/sisvan/relatoriopublico/index",
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                Origin: "https://sisaps.saude.gov.br",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "charset":"utf-8",
            },
            body: bodies[type],
            "method": "POST",
        });
    },
}
