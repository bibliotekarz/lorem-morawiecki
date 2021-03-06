function switchText() {
    let string0 = ["Program nazwany",
        "Narodowy projekt o nazwie",
        "Realizowany przez rząd projekt",
        "Budowany z sukcesem narodowy konstrukt",
        "Najistotniejszy dla przyszłości kraju koncept rządu",
        "Wielka operacja gospodarcza",
        "Zjednoczona Prawica realizator projektu",
        "Myślą przewodnią, która przyświeca mi przy wszystkich działaniach",
        "Wieloletnie dzieło naszego rządu"];
    let string1 = ["Polski ład",
        "Mieszkanie plus",
        "Piątka Kaczyńskiego",
        "Plan Dudy",
        "Milion aut elektrycznych",
        "Centralny port komunikacyjny",
        "Przekop Mierzei Wiślanej"];
    let string2 = ["był jasnym sygnałem, że",
        "kolejny raz potwierdził, że",
        "raz jeszcze potwierdził, że",
        "udowodnił całemu światu, że",
        "przekonał Unię Europejską, że",
        "otworzył oczy tym którzy wątpili, że",
        "uświadomił naszym zagranicznym partnerom, że"];
    let string3 = ["tu - na Polskiej ziemi",
        "w sercu Europy", "pomiędzy wschodem a zachodem",
        "w zdradzonej w Jałcie Polsce",
        "w dumnym kraju nad Wisłą",
        "w miejscu gdzie rozwój i sprawy społeczne to jedno i to samo",
        "w stolicy grupy wyszechgradzkiej",
        "tu gdzie kwitnąca gospodarka jest warunkiem prowadzenia szczodrej polityki społecznej",
        "w samym centrum trójmorza"];
    let string4 = ["królewski szczep piastowy",
        "mężny naród obrońców Chrześcijaństwa",
        "obóz polskich patriotów",
        "rząd zjednoczonej prawicy",
        "naród potomków husarii",
        "wielki naród polski",
        "Rząd, na którego czele stoję",
        "kraj, który nie poddał się tyranii absolutyzmu, germanizacji, rusyfikacji, nazizmu ani komunizmu",
        "naród który w dramatycznych okolicznościach bronił człowieczeństwa",
        "kraj w którym panuje prawo i sprawiedliwość"];
    let string5 = ["osiąga we współczesnym świecie sukcesy co najmniej na miarę cesarstwa rzymskiego.",
        "wybrał własną można powiedzieć - trzecią drogę pomyślnego rozwoju.",
        "nie zrezygnuje z własnych korzeni i tradycji, by zadowolić różne grupy interesów.",
        "zmierza ku świetlanej przyszłości, pełnej dobrobytu i demokracji.",
        "kroczy ścieżką światowego lidera nowoczesnych technologii.",
        "nie potrzebuje pouczeń ze strony tych, którzy za nic mają honor i przyzwoitość.",
        "realizuje nasze pragnienie wolności i pragnienie prawdy.",
        "buduje ten głęboki wymiar wspólnotowy który jest nieodłącznie wpisany w naszą tradycję.",
        "wprowadził stan wyjątkowy nie po to, żeby ograniczać wolność, ale żeby zapewniać wolność",
        "potrafi zbudować gospodarcze eldorado oparte na tradycji chrześcijańskiej."];

    let ile = parseInt(document.getElementById("ileakapitow").value);

    let randomNumber0 = Math.floor(Math.random() * string0.length);
    let randomNumber1 = Math.floor(Math.random() * string1.length);
    let randomNumber2 = Math.floor(Math.random() * string2.length);
    let randomNumber3 = Math.floor(Math.random() * string3.length);
    let randomNumber4 = Math.floor(Math.random() * string4.length);
    let randomNumber5 = Math.floor(Math.random() * string5.length);

    return document.getElementById("randomText").innerHTML = string0[randomNumber0] + " \""
        + string1[randomNumber1] + "\" " + string2[randomNumber2] + " " + string3[randomNumber3]
        + " " + string4[randomNumber4] + " " + string5[randomNumber5];
}

function start() {
    let images = ["pinokio1.jpg", "pinokio2.jpg", "pinokio3.jpg", "pinokio4.jpg", "pinokio5.jpg", "pinokio6.jpg", "pinokio7.jpg", "pinokio8.jpg"];
    let randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("main").style.background = "url(img/" + images[randomImage] + ") no-repeat center center fixed";
    document.getElementById("main").style.backgroundColor = "red";
    document.getElementById("main").style.backgroundSize = "cover";
    document.getElementById("main").style.height = "100%";
    document.getElementById("main").style.overflow = "auto";
    document.getElementById("ileakapitow").addEventListener("input", przelicz);
    document.getElementById("ileakapitow").addEventListener("click", generujAkapity);
    document.getElementById("ileakapitow").value = 3;
    document.getElementById("svg-wrapper").style.display = "none";
    document.getElementById("kopiuj").addEventListener("click", copyTextToClipboard);

    switchText();
}
function przelicz() {
    let ile = parseInt(document.getElementById("ileakapitow").value);
    let akapityodmiana = ["akapitów", "akapit", "akapity"];
    document.getElementById("akapity").value = ile;
    document.getElementById("odmiana").value = odmien(ile, akapityodmiana);
    document.getElementById("znaki").value = ile * 660;
}
function generujAkapity() {
    document.getElementById("svg-wrapper").style.display = "inherit";

    document.getElementById("kopiuj").innerHTML = "Kopiuj do schowka";
    let ile = parseInt(document.getElementById("ileakapitow").value);
    let i = 0;
    let tekst = "";
    while (i < ile) {
        tekst = tekst + "<p class=\"tareaValue1\">" + switchText() + " " + switchText() + " " + switchText() + "</p>";
        i++;
    }

    document.getElementById("trzyAkapity").innerHTML = "<div class=\"tareaValue\">" + tekst + "</div>";
    return

}

var odmien = function (value, numerals) {
    let ile = parseInt(document.getElementById("ileakapitow").value);

    var t0 = value % 10,
        t1 = value % 100,
        vo = [];
    if (value === 1 && numerals[1])
        vo.push(numerals[1]);
    else if ((value == 0 || (t0 >= 0 && t0 <= 1) || (t0 >= 5 && t0 <= 9) || (t1 > 10 && t1 < 20)) && numerals[0])
        vo.push(numerals[0]);
    else if (((t1 < 10 || t1 > 20) && t0 >= 2 && t0 <= 4) && numerals[2])
        vo.push(numerals[2]);
    return vo.join(' ');
};

function copyTextToClipboard() {

    navigator.clipboard.writeText(document.getElementById("trzyAkapity").innerText);
    document.getElementById("kopiuj").innerHTML = "Tekst jest schowku";
}