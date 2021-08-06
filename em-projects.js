let em_projects = [
    {
        title: "رونیو",
        url: "https://ronio.ir"
    },
    {
        title: "اسموشر",
        url: "https://smusher.ir"
    },
    {
        title: "فایلیتو",
        url: "https://filito.ir"
    },
    {
        title: "جی‌کوئری لازم نیست !",
        url: "https://nojquery.ir"
    },
    {
        title: "جهنم وب !",
        url: "https://HTMHell.ir"
    },
    {
        title: "نپرس که بپرسم، فقط بپرس !",
        url: "https://dontasktoask.ir"
    },
    {
        title: "بهترین سایت دنیا",
        url: "https://theperfectsite.ir"
    },
        {
        title: "مجموعه دولوپیکس",
        url: "https://developix.ir"
    },
];

let em_projects_container = document.querySelector("#em-projects");

let em_projects_p = document.createElement('p');

let em_projects_ul = document.createElement('ul');

em_projects_container.appendChild(em_projects_p);

em_projects_container.appendChild(em_projects_ul);

em_projects_ul.style.float = "right";
em_projects_ul.style.width = "100%";
em_projects_ul.style.padding = "0";
em_projects_ul.style.margin = "16px 0";

em_projects_p.style.fontSize = "17px";
em_projects_p.style.padding = "0";
em_projects_p.style.margin = "0";
em_projects_p.innerText = "لیست پروژه های مفید :";

em_projects_ul.style.float = "right";
em_projects_ul.style.width = "100%";
em_projects_ul.style.padding = "0";
em_projects_ul.style.margin = "0";

em_projects.forEach((value, index, array) => {
    var em_li = document.createElement('li');
    var em_a = document.createElement('a');

    em_li.appendChild(em_a);
    document.querySelector("#em-projects ul").appendChild(em_li);

    em_li.style.float = "right";
    em_li.style.width = "100%";
    em_li.style.padding = "6px 0";
    em_li.style.margin = "0";
    em_a.href = value['url'] + '/?utm_source=' + window.location.hostname + '&utm_medium=banner&utm_campaign=emprojects';
    em_a.style.fontSize = "16px";
    em_a.style.padding = "0";
    em_a.style.margin = "0";
    em_a.target = "_blank";
    em_a.innerText = value['title'];
});

console.log(
"                                                                                    \n" +
"%c                 /@@@@@@@@@@@@@@@@@@@@@   %c@@@@@@@@@@@@@@@@@@@@@(                \n" + 
"%c               @@@@@@@@@@@@@@@@@@@@@@@@   %c@@@@@@@@@@@@@@@@@@@@@@@@              \n" + 
"%c            .@@@@@@@@@@@@@@@@@@@@@@@@@@   %c@@@@@@@@@@@@@@@@@@@@@@@@@@.           \n" + 
"%c          @@@@@@@@@,                      %c@@@@@@      @@@@@@ @@@@@@@@@@         \n" + 
"%c        @@@@@@@@@                         %c@@@@@@      @@@@@@    @@@@@@@@@       \n" + 
"%c     @@@@@@@@@&                           %c@@@@@@      @@@@@@      @@@@@@@@@@    \n" + 
"%c   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   %c@@@@@@      @@@@@@         @@@@@@@@@  \n" + 
"%c @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   %c@@@@@@      @@@@@@           @@@@@@@@@\n" + 
"%c   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   %c@@@@@@      @@@@@@        @@@@@@@@@@  \n" + 
"%c      @@@@@@@@@                           %c@@@@@@      @@@@@@      @@@@@@@@@     \n" + 
"%c        @@@@@@@@@@                        %c@@@@@@      @@@@@@      @@@@@@@       \n" + 
"%c           @@@@@@@@@                      %c@@@@@@      @@@@@@      @@@@          \n" + 
"%c             @@@@@@@@@@                   %c@@@@@@      @@@@@@      @@            \n" + 
"%c                @@@@@@@@@                 %c@@@@@@      @@@@@@                    \n" + 
"%c                  @@@@@@@@@@              %c@@@@@@      @@@@@@                    \n" + 
"%c                    @@@@@@@@@             %c@@@@@@     .@@@@@@                    \n" + 
"%c                       @@@@@@@@@@         %c@@@@@@     .@@@@                      \n" + 
"%c                          @@@@@@@@@       %c@@@@@@     .@                         \n" + 
"%c                            @@@@@@@@@@    %c@@@@@@                                \n" + 
"%c                               @@@@@@@@   %c@@@@@@                                \n" + 
"%c                                 @@@@@@   %c@@@@@@                                \n" + 
"%c                                    @@@   %c@@@                                   \n" + 
"%c                                      @   %c@                                     \n" +
"%c                                                                                  \n" +
"%c                              https://ErfanMola.ir (:                             \n",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #3949AB;font-weight: bold;",
"color: #D32F2F;font-weight: bold;", "color: #D32F2F;font-weight: bold;");
