/* Endereços confirmados pelo IgesDF (igesdf.org.br/unidades/) e SES-DF */
const upas = [
  {
    id: 1,
    nome: "UPA Brazlândia",
    cidade: "Brazlândia",
    endereco: "Q 36 AE 3, 0, Vila São José, Brazlândia - DF, CEP 72736-500",
    telefone: "(61) 3550-8900 " + " (Ramal: 8690)",
    lat: -15.6747, lng: -48.1917,
    maps: "https://maps.google.com/?q=UPA+Brazlândia+Vila+São+José+Q37+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-brazlandia-q.-37?navigate=yes&to=place.w.204342891.2043428913.40196955"
  },
  {
    id: 2,
    nome: "UPA Ceilândia",
    cidade: "Ceilândia",
    endereco: "QNN 27, Área Especial D — Ceilândia Norte - DF, CEP 72225-270",
    telefone: "(61) 3550-8897 " + " (Ramal: 8590)",
    lat: -15.8142, lng: -48.1081,
    maps: "https://maps.google.com/?q=UPA+Ceilândia+QNN+27+Ceilândia+Norte+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/br/df/upa-de-ceilandia?navigate=yes&to=place.ChIJnf-EwPfMW5MRp0bKkoTtMRo"
  },
  {
    id: 3,
    nome: "UPA Ceilândia II",
    cidade: "Ceilândia",
    endereco: "Setor O, QNO 21, Área Especial D — Ceilândia - DF",
    telefone: "(61) 3550-8900 " + " (Ramal: 8605)",
    lat: -15.8321, lng: -48.1143,
    maps: "https://maps.google.com/?q=UPA+Ceilândia+II+QNO+21+Ceilândia+Norte+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-ceilandia-2-qno-19-ae?navigate=yes&to=place.w.204408426.2043822117.25963678"
  },
  {
    id: 4,
    nome: "UPA Gama",
    cidade: "Gama",
    endereco: "SIND QI 7, Gama - DF",
    telefone: "(61) 3550-8900 " + " (Ramal: 8605)",
    lat: -16.0074, lng: -48.0613,
    maps: "https://maps.google.com/?q=UPA+Gama+Quadra+AC+102+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/br/df/upa-gama?navigate=yes&to=place.ChIJU-Rr0V6BWZMRbMWhINlxARM"
  },
  {
    id: 5,
    nome: "UPA Núcleo Bandeirante",
    cidade: "Núcleo Bandeirante",
    endereco: "DF-075, Km 180, AE, EPNB — Núcleo Bandeirante - DF",
    telefone: "(61) 3550-8817 " + " (Ramal: 8560)",
    lat: -15.8696, lng: -47.9664,
    maps: "https://maps.google.com/?q=UPA+Núcleo+Bandeirante+DF-075+KM+180+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-nucleo-bandeirante-df-075-km-180-placa-das-mercedes-180?navigate=yes&to=place.w.204473961.2044870684.2234707"
  },
  {
    id: 6,
    nome: "UPA Paranoá",
    cidade: "Paranoá",
    endereco: "Q 1/2, C 1, AE 4 EPC — Paranoá Parque - DF",
    telefone: "(61) 3550-5442 ",
    lat: -15.7569, lng: -47.7745,
    maps: "https://maps.google.com/?q=UPA+Paranoá+Paranoá+Parque+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-paranoa-park?navigate=yes&to=place.w.204605034.2046115879.25071552"
  },
  {
    id: 7,
    nome: "UPA Planaltina",
    cidade: "Planaltina",
    endereco: "Setor Habitacional Mestre D'Armas, Q 23, MD 2, LT 1 — Planaltina - DF",
    telefone: "(61) 3550-8900 " + " (Ramal: 8661)",
    lat: -15.6198, lng: -47.6511,
    maps: "https://maps.google.com/?q=UPA+Planaltina+Setor+Habitacional+Mestre+DArmas+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/br/df/upa-planaltina-(estancia-v)?navigate=yes&to=place.ChIJg7mUf2trWpMRk4j68RqdpOI"
  },
  {
    id: 8,
    nome: "UPA Recanto das Emas",
    cidade: "Recanto das Emas",
    endereco: "Quadra 400/600, AE — Recanto das Emas - DF, CEP 72630-250",
    telefone: "(61) 3550-8809",
    lat: -15.9063, lng: -48.0639,
    maps: "https://maps.google.com/?q=UPA+Recanto+das+Emas+Quadra+400+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-recanto-das-emas-av.-ponte-alta?navigate=yes&to=place.w.204408425.2044346393.2056422"
  },
  {
    id: 9,
    nome: "UPA Riacho Fundo II",
    cidade: "Riacho Fundo II",
    endereco: "QN 31, CJ 3, LT 1 — Riacho Fundo II - DF",
    telefone: "(61) 3550-8900 " + " (Ramal: 8647)",
    lat: -15.9005, lng: -48.0276,
    maps: "https://maps.google.com/?q=UPA+Riacho+Fundo+II+QN+31+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-riacho-fundo-ii-qn-31-cj.-3-riacho-fundo-2?navigate=yes&to=place.w.204473961.2044477466.27376459"
  },
  {
    id: 10,
    nome: "UPA Samambaia",
    cidade: "Samambaia",
    endereco: "QS 107, Conj. 04 — Samambaia Sul - DF, CEP 72322-700",
    telefone: "(61) 3550-8739 " + " (Ramal: 8519)",
    lat: -15.8779, lng: -48.0828,
    maps: "https://maps.google.com/?q=UPA+Samambaia+QS+107+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-samambaia-qr-107?navigate=yes&to=place.w.204408425.2044084252.3728861"
  },
  {
    id: 11,
    nome: "UPA São Sebastião",
    cidade: "São Sebastião",
    endereco: "Quadra 102, Conj. 01, Área Especial 1 — São Sebastião Oeste - DF",
    telefone: "(61) 3550-8746 " + " (Ramal: 8572)",
    lat: -15.9051, lng: -47.7991,
    maps: "https://maps.google.com/?q=UPA+São+Sebastião+Quadra+102+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-sao-sebastiao-q.-102-cj.-1?navigate=yes&to=place.w.204605033.2046181402.5228437"
  },
  {
    id: 12,
    nome: "UPA Sobradinho",
    cidade: "Sobradinho",
    endereco: "DF-420, Km 2, Complexo de Saúde — Setor de Mansões de Sobradinho - DF",
    telefone: "(61) 3550-8752" + " (Ramal: 8501)",
    lat: -15.6518, lng: -47.7884,
    maps: "https://maps.google.com/?q=UPA+Sobradinho+DF-420+Km+2+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-sobradinho-df-420-sobradinho-2?navigate=yes&to=place.w.204605036.2045919284.3670403"
  },
  {
    id: 13,
    nome: "UPA Vicente Pires",
    cidade: "Vicente Pires",
    endereco: "Rua 10, Q 4D — Vicente Pires, DF",
    telefone: "(61) 3550-8900" + " (Ramal: 8670)",
    lat: -15.8163, lng: -48.0235,
    maps: "https://maps.google.com/?q=UPA+Vicente+Pires+DF",
    waze: "https://www.waze.com/pt-BR/live-map/directions/upa-vicente-pires-r.-10?navigate=yes&to=place.w.204473962.2044608548.25906610"
  }
];

const cidades = ["Todas", ...upas.map(u => u.cidade)];
let cidadeAtiva = "Todas";
let termoBusca = "";

/* Extrai só o número principal, ignorando "(Ramal: ...)" */
function telLink(telefone) {
  const principal = telefone.split(/ramal/i)[0]; // pega antes de "Ramal"
  const digitos = principal.replace(/\D/g, "");
  return "tel:+55" + digitos; // +55 = código do Brasil, melhora reconhecimento no iOS
}

/* PILLS */
const filtersEl = document.getElementById("filters");
cidades.forEach(c => {
  const btn = document.createElement("button");
  btn.className = "pill" + (c === "Todas" ? " active" : "");
  btn.textContent = c;
  btn.dataset.cidade = c;
  btn.addEventListener("click", () => {
    cidadeAtiva = c;
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
  filtersEl.appendChild(btn);
});

function filtrar() {
  return upas.filter(u => {
    const matchCidade = cidadeAtiva === "Todas" || u.cidade === cidadeAtiva;
    const t = termoBusca.toLowerCase();
    const matchBusca = !t
      || u.nome.toLowerCase().includes(t)
      || u.cidade.toLowerCase().includes(t)
      || u.endereco.toLowerCase().includes(t);
    return matchCidade && matchBusca;
  });
}

function render() {
  const lista = filtrar();
  const container = document.getElementById("cards");
  const count = document.getElementById("resultsCount");

  count.innerHTML = lista.length === 0
    ? ""
    : `<strong>${lista.length}</strong> UPA${lista.length !== 1 ? "s" : ""} encontrada${lista.length !== 1 ? "s" : ""}`;

  if (lista.length === 0) {
    container.innerHTML = `<div class="empty"><h3>Nenhuma UPA encontrada</h3><p>Tente outro termo de busca.</p></div>`;
    return;
  }

  container.innerHTML = lista.map(u => {
    const corridaUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(u.nome + " " + u.endereco)}&travelmode=driving`;
    const wazeUrl = u.waze ? u.waze : `https://waze.com/ul?ll=${u.lat},${u.lng}&navigate=yes`;
    return `
    <div class="card" data-id="${u.id}">
      <div class="card-clickable" data-open="${u.id}">
        <div class="card-top">
          <span class="card-cidade">${u.cidade}</span>
          <span class="card-open">Aberta 24h</span>
        </div>
        <h3>${u.nome}</h3>
        <div class="card-meta">
          <span class="card-address">${u.endereco}</span>
          <span class="card-phone">${u.telefone}</span>
        </div>
      </div>
      <div class="card-actions">
        <div class="card-actions-row">
          <a class="btn-maps" href="${u.maps}" target="_blank" rel="noopener">📍 Maps</a>
          <a class="btn-phone" href="${telLink(u.telefone)}">📞 Ligar</a>
        </div>
        <div class="card-actions-row">
          <a class="btn-corrida" href="${corridaUrl}" target="_blank" rel="noopener">🚗 Corrida</a>
          <a class="btn-waze" href="${wazeUrl}" target="_blank" rel="noopener">🗺 Waze</a>
        </div>
      </div>
    </div>
  `;
  }).join("");

  /* Só a área de cabeçalho abre o modal; os links de ação ficam livres */
  container.querySelectorAll(".card-clickable").forEach(el => {
    el.addEventListener("click", () => abrirModal(parseInt(el.dataset.open)));
  });
}

function abrirModal(id) {
  const u = upas.find(x => x.id === id);
  if (!u) return;
  document.getElementById("modalCidade").textContent = u.cidade;
  document.getElementById("modalTitle").textContent = u.nome;
  document.getElementById("modalAddress").textContent = u.endereco;
  document.getElementById("modalPhone").textContent = u.telefone;
  document.getElementById("modalMaps").href = u.maps;
  document.getElementById("modalPhoneLink").href = telLink(u.telefone);
  document.getElementById("modalCorrida").href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(u.nome + " " + u.endereco)}&travelmode=driving`;
  document.getElementById("modalWaze").href = u.waze
    ? u.waze
    : `https://waze.com/ul?ll=${u.lat},${u.lng}&navigate=yes`;
  document.getElementById("modalOverlay").classList.add("open");
}

function fecharModal() {
  document.getElementById("modalOverlay").classList.remove("open");
}

document.getElementById("modalClose").addEventListener("click", fecharModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) fecharModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModal(); });
document.getElementById("search").addEventListener("input", e => {
  termoBusca = e.target.value;
  render();
});

render();
