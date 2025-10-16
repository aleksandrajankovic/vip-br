let data = {
    DailyCashback: [
      {
        title: "Cashback diário",
        desc: "Ganhe até 10% de cashback diário sobre suas apostas do dia anterior.",
        image: "assets/icons/DailyCashback.png"
      },
    ],
    FreeSpins: [
      {
        title: "Rodadas grátis",
        desc: "Receba rodadas grátis em jogos indicados.",
        image: "assets/icons/FreeSpins.png"
      },
    ],
    ExclusiveSupport: [
        {
          title: "Atendimento exclusivo",
          desc: "Suporte rápido e personalizado para suas dúvidas e solicitações via Whatsapp.",
          image: "assets/icons/ExclusiveSupport.png"
        },
      ],
      WeeklyTournament: [
        {
          title: "Torneios semanais",
          desc: "Aumente a emoção de suas apostas enquanto se diverte em nossos torneiros.",
          image: "assets/icons/WeeklyTournament.png"
        },
      ],
      WeeklyOffers: [
        {
          title: "Ofertas semanais",
          desc: "Receba com exclusividade ofertas semanais e maximize a possibilidade de ganhos.",
          image: "assets/icons/WeeklyOffers.png"
        },
      ],
      MonthlyBenefits: [
        {
          title: "Benefícios mensais",
          desc: "Superamos suas expectativas. Prepare-se para novas surpresas que vão encantar você.",
          image: "assets/icons/MonthlyBenefits.png"
        },
      ],
      rankingSystem: {
        ouro: {
          head : "VIP OURO",
          deposit: "",
          prise:"GGR entre <br> R$ 1.500,00 e R$ 9.999,99",
          bulletOne: "6% de cashback diário",
          bulletTwo: "Torneios semanais",
          bulletThree: "Ofertas semanais"
        },
        platina: {
          head : "VIP PLATINA",
          deposit: "",
          prise:" GGR entre <br> R$ 10.000,00 e R$ 29.999,99",
          bulletOne: "8% de cashback diário ",
          bulletTwo: "Torneios semanais ",
          bulletThree: "Ofertas semanais",
          bulletFour: "Benefícios mensais"
        },
        diamante: {
          head : "VIP DIAMANTE",
          deposit: "",
          prise:" GGR acima de<br> R$ 30.000,00 ",
          bulletOne: "10% de cashback diário ",
          bulletTwo: "Atendimento exclusivo ",
          bulletThree: "Torneios semanais",
          bulletFour: "Ofertas semanais",
          bulletFive: "Benefícios mensais"
        },
        
      }
  };
  /*POPUP*/
  function generateHTML(contentData, id) {
    return `<div class="popup-box" id="${id}">
  <img class="popup-icon" src="${contentData.image}"/>
      <h2 class="about-naslov">${contentData.title}</h2>
      <p>${contentData.desc}</p>
    </div>`;
  }
  

  function renderContent(content, id, buttonClass) {
    const popup = document.querySelector(".popup-active");
    const popupContent = document.querySelector(".popup-content-active");
  
    document.querySelector(`.${buttonClass}`).addEventListener("click", function (event) {
      event.preventDefault();
  
      if (popup.classList.contains("show")) {
        return;
      }
  
      popup.style.display = "block";
      popupContent.style.display = "flex";
      popupContent.style.justifyContent="center";
  
      let contentData = data[content][0];
      let contentHTML = generateHTML(contentData, id);
      popupContent.innerHTML = contentHTML;
  
      var closeBtn = document.createElement("img");
      closeBtn.id = "close-btn";
      closeBtn.src = "assets/icons/CLOSE-03 1.png"; 
      popupContent.appendChild(closeBtn);
  
      closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
  
        setTimeout(function() {
          popup.style.display = "none";
        }, 300);
  
        setTimeout(function() {
          popup.classList.remove("show");
          popupContent.classList.remove("show");
        }, 10);
      });
  
      setTimeout(function() {
        popup.classList.add("show");
        popupContent.classList.add("show");
      }, 10);
    });
  
    popup.addEventListener("click", function () {
      setTimeout(function() {
        popup.style.display = "none";
      }, 300);
  
      setTimeout(function() {
        popup.classList.remove("show");
        popupContent.classList.remove("show");
      }, 10);
    });
  
    popupContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    renderContent("DailyCashback", "DailyCashback", "cashback-btn");
    renderContent("FreeSpins", "FreeSpins", "spins-btn");
    renderContent("ExclusiveSupport", "ExclusiveSupport", "support-btn");
    renderContent("WeeklyTournament", "WeeklyTournament", "tournament-btn");
    renderContent("WeeklyOffers", "WeeklyOffers", "offers-btn");
    renderContent("MonthlyBenefits", "MonthlyBenefits", "monthly-btn");
  });

  function generateHTMLRanking(rankingData) {
    let html = ' <div class="text-box-heading-2"><p>Desbloqueie vantagens exclusivas enquanto se diverte em seus jogos favoritos!</p></div><div class="box-wrapper">';
    
    for (let rank in rankingData) {
      html += `<div class="box">
        <div class="head"><h4>${rankingData[rank].head}</h4></div>
        <div class="body-box">
        <div class="prise"><p>${rankingData[rank].prise}</p></div>
        <div class="deposit"><p>${rankingData[rank].deposit}</p></div>
        <div class="list">
        <ul>`;
      
  
      if (rankingData[rank].bulletOne !== undefined) {
        html += `<li class="list-box"><img src="/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletOne}</li>`;
      }
      if (rankingData[rank].bulletTwo !== undefined) {
        html += `<li class="list-box"><img src="/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletTwo}</li>`;
      }
      if (rankingData[rank].bulletThree !== undefined) {
        html += `<li class="list-box"><img src="/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletThree}</li>`;
      }
      if (rankingData[rank].bulletFour !== undefined) {
        html += `<li class="list-box"><img src="/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletFour}</li>`;
      }
      if (rankingData[rank].bulletFive !== undefined) {
        html += `<li class="list-box"><img src="/assets/icons/bullet.svg" alt="Icon">${rankingData[rank].bulletFive}</li>`;
      }
      
      html += `</ul></div>
        </div>
      </div>`;
    }
    html += `</div>`; 
    return html;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const rankingSystemContainer = document.querySelector(".ranking-system");
  
    rankingSystemContainer.innerHTML = generateHTMLRanking(data.rankingSystem);
  });
  


  