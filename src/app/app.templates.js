angular.module('hb.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/app.html',
    "<div id=view class=contain><div class=main-header><div hb-s-row ng-show=\"doneHelloMsg && doneGlitchFirst\"><div hb-s-col=12><canvas id=nodes width=1000px height=100px class=main-header__canvas ng-class=\"{'visible': canvasPrepped}\"></canvas></div></div></div><div class=main-body hb-s-px=2><div class=main-body__top><div ng-show=\"doneHelloMsg && doneGlitchFirst\"><div hb-s-row hb-s-pt=4 ng-init=\"isHoveringNav = {};\" style=\"max-width: 1200px\"><div class=inline-block ng-repeat=\"nav in navs\" hb-s-col=4 hb-t-font=center><div hb-s-row hb-c-text=mono hb-t-font=\"h5 small-caps\" hb-s-pl=4><a typewrite hb-c-text=mono hb-t-font=link style=\"text-decoration: none\" class=nav__title ng-class=\"{'nav__title--active': activeNav.state === nav.state}\" ng-mouseenter=\"isHoveringNav[$index] = true\" ng-mouseleave=\"isHoveringNav[$index] = false\" initial-delay={{::nav.initialDelay}} type-delay=50 blink-cursor=false cursor=| ng-click=nav.navigate() text={{::nav.title}} ng-href={{::nav.href}} target=_blank></a></div></div></div></div></div><div class=main-body__bottom--visibility-mask ng-class=\"{'visible': doneNav}\"><div class=main-body__bottom ui-view></div></div></div></div><div ng-if=!doneHelloMsg><div class=greeting-mask><div hb-s-row hb-s-pt=16><div hb-s-col-offset=3 hb-s-col=4><h1 typewrite type-delay=60 blink-cursor=false cursor=_ text={{hello.me}} hb-t-font=h1></h1></div><div hb-s-col=2><span class=main__img hb-s-pull=right ng-if=!doneHelloMsg ng-class=\"{'visible': doneHelloMe}\"><img ng-src={{hello.img}} height=43px hb-s-pr=3 hb-s-pt=1></span></div></div><div hb-s-row hb-s-pt=7><div hb-s-col-offset=3 hb-s-col=7><h2 typewrite initial-delay=2250 type-delay=30 blink-cursor=false cursor=_ text={{hello.msg}} hb-c-text=mono hb-t-font=h2></h2></div></div></div></div><div ng-if=isGlitching><div class=glitch-mask></div></div><div class=greeting-footer hb-s-px=2 ng-class=\"{'visible': doneNav}\"><div hb-s-row hb-t-font=center><span hb-t-font=small>Want to reach out or want to know more about a particular project? Feel free to <span hb-t-font=link ng-click=goUrl(navContact.href) target=_blank>contact me</span> at hunterbrennick@gmail.com</span></div></div>"
  );


  $templateCache.put('/app/bio/views/bio.html',
    "<div class=bio><div class=bio__header><div class=bio__left><img ng-src=/assets/img/me2.jpg style=\"border-radius: 50%\" hb-s-pull=right width=120px></div><div class=bio__right><div hb-s-row hb-s-pb=4><h2 hb-t-font=h2>My name is Hunter Brennick and I am currently a senior at Georgia Institute of Technology pursuing a degree in Computer Science.</h2></div></div></div><div class=bio__body hb-t-font=p hb-s-pt=4><div hb-s-row hb-s-pb=4><span hb-t-font=p>While pursuing a degree in Computer Science, I have been working at various startups in a wide array of roles ranging from consulting to co-founding. Today, I work at a marketing automation company called Landing Lion that I co-founded with a team made up of primarily Georgia Tech graduates.</span></div><div hb-s-row hb-s-pb=4><span hb-t-font=p>Currently I have a strong passion in data info-visualizations and deeply immersive, explorable analytics. I strive to allow people to look at data and analytical information in new, creative, and complex ways which have yet to be discovered.</span></div><div hb-s-row><span hb-t-font=p>I love working with vibrant, hard-working people that are consistently level-headed, open-minded, curious, and creative on a day-to-day basis.</span></div></div></div>"
  );


  $templateCache.put('/app/projects/views/projects.html',
    "<div class=container ui-view></div>"
  );


  $templateCache.put('/app/projects/views/projects.list.html',
    "<div class=projects__left><div hb-s-row hb-s-pr=4 hb-s-pl=8 hb-s-py=5><div hb-s-row hb-s-pb=4><h5 hb-t-font=\"h5 small-caps\" hb-s-pb=3>Work</h5><div hb-s-row ng-repeat=\"project in projects\" hb-s-pl=1 hb-s-pb=2><h6 ng-click=goProject(project) hb-c-text=mono ng-class=\"{'nav__title--active': activeProjectNav.state === project.state}\" hb-t-font=\"link h6 small-caps\">{{::project.title}}</h6></div></div><div hb-s-row><h5 hb-t-font=\"h5 small-caps\" hb-s-pb=3>School</h5><div hb-s-row ng-repeat=\"schoolProject in schoolProjects\" hb-s-pl=1 hb-s-pb=2><h6 ng-click=goProject(schoolProject) hb-c-text=mono ng-class=\"{'nav__title--active': activeProjectNav.state === schoolProject.state}\" hb-t-font=\"link h6 small-caps\">{{::schoolProject.title}}</h6></div></div></div></div><div class=projects__right ui-view></div>"
  );


  $templateCache.put('/app/projects/views/projects.list.project.html',
    "<div class=projects__right--reader><div class=project__header><div class=project__header-left hb-s-pt=4.5><img hb-t-font=interact ng-click=goUrl(activeProject.forUrl) ng-src={{activeProject.forLogoUrl}} width=80px></div><div class=project__header-right hb-s-py=4><div hb-s-row><div hb-s-col=9><h4 hb-t-font=h4>{{activeProject.title}}</h4></div><div hb-s-col=3 hb-s-pt=1.5><span hb-s-pull=right hb-c-text=mono hb-t-font=\"small small-caps\"><span>{{activeProject.dateBegin | date:'MMM yyyy'}}</span> <span>- {{activeProject.dateEnd.length ? (activeProject.dateEnd | date:'MMM yyyy') : 'Present'}}</span></span></div></div><div hb-s-row hb-s-pt=2><span hb-c-text=mono hb-t-font=lead>{{activeProject.subtitle}}</span></div></div></div><div class=project__body hb-s-pt=8><div hb-s-row ng-if=activeProject.software.length><span hb-t-font=\"h5 semi-bold small-caps\" hb-s-pr=3>Core technologies used:</span> <span ng-repeat=\"software in activeProject.software\" hb-c-text=mono hb-t-font=\"h6 small-caps semi-bold\">{{software}}<span ng-if=!$last>,</span></span></div><div hb-s-row hb-s-pt=2><span hb-t-font=\"h5 semi-bold small-caps\">Currently active: <span hb-s-pl=3 hb-c-text=\"{{activeProject.isActive\n" +
    "                ? 'success' : 'danger'}}\">{{activeProject.isActive ? 'yes' : 'no'}}</span></span></div><div hb-s-row hb-s-pt=2><span hb-t-font=\"h5 semi-bold small-caps\" hb-s-pr=3>Repository URL:</span> <span ng-if=activeProject.repoUrl hb-t-font=h6 hb-t-font=link hb-c-text=primary ng-click=goUrl(activeProject.repoUrl)>{{activeProject.repoUrl}}</span> <span ng-if=!activeProject.repoUrl><span hb-c-text=danger hb-t-font=\"h5 small-caps semi-bold\">private</span><span hb-s-pl=2 hb-s-pb=1 style=\"position: relative; top: -2px\" hb-c-text=mono-light hb-t-font=\"small small-caps\">:(</span></span></div><div hb-s-row ng-if=activeProject.bodyTexts.length hb-s-pt=8><div hb-s-row hb-s-pb=4 ng-repeat=\"bodyText in activeProject.bodyTexts\"><span hb-t-font=p>{{bodyText}}</span></div></div></div></div>"
  );

}]);
