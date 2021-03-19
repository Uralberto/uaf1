const letraA = document.getElementById('letra-A')
    const brazoLetraU = document.getElementById('brazo-letra-U')

    const noneStroke = function () {
      letraA.classList.add("none-stroke")
      brazoLetraU.classList.add("none-stroke")
    }

    const noNoneStroke = function () {
      letraA.classList.remove("none-stroke")
      brazoLetraU.classList.remove("none-stroke")
    }

    const logo = document.getElementById('logo');
    logo.addEventListener("mouseover", noneStroke);
    logo.addEventListener("mouseleave", noNoneStroke);

