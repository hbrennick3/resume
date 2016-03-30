angular.module('hb.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/app.html',
    "<div id=\"view contain\"><div class=main-header><div hb-s-row ng-show=\"helloMsgDone && firstGlitchDone\"><div hb-s-col=12><canvas id=nodes width=1000px height=100px class=main-header__canvas ng-class=\"{'visible': canvasPrepped}\"></canvas></div></div></div><div class=main-body hb-s-px=2><div class=main-body__top><div ng-show=\"helloMsgDone && firstGlitchDone\"><div hb-s-row hb-s-pt=4 ng-init=\"isHoveringNav = {};\"><div class=inline-block ng-repeat=\"nav in navs\" hb-s-col=3><div hb-s-row hb-c-text=mono hb-t-font=\"h5 small-caps\" hb-s-pl=4><div hb-s-col=2 hb-s-pr=2><span hb-s-px=4 class=nav-anchor ng-class=\"{'visible': helloMsgDone}\" ng-show=helloMsgDone>{{isHoveringNav[$index] ? '_' : '.' }}</span></div><div hb-s-col=10><a typewrite hb-c-text=mono hb-t-font=link style=\"text-decoration: none\" class=nav__title ng-class=\"{'nav__title--active': activeNav.state === nav.state}\" ng-mouseenter=\"isHoveringNav[$index] = true\" ng-mouseleave=\"isHoveringNav[$index] = false\" initial-delay={{::nav.initialDelay}} type-delay=50 blink-cursor=false cursor=_ ng-click=nav.navigate() text={{::nav.title}} ng-href={{::nav.href}} target=_blank></a></div></div></div></div></div></div><div class=main-body__bottom ng-show=\"helloMsgDone && firstGlitchDone\" ui-view></div></div></div><div ng-if=!helloMsgDone><div class=greeting-mask><div hb-s-row><div hb-s-col-offset=3 hb-s-col=4><h1 typewrite type-delay=60 blink-cursor=false cursor=_ text={{hello.me}} hb-t-font=h1></h1></div><div hb-s-col=4><span class=main__img ng-if=!helloMsgDone ng-class=\"{'visible': helloMeDone}\"><img ng-src={{hello.img}} height=43px hb-s-pr=3 hb-s-pt=1></span></div></div><div hb-s-row hb-s-pt=7><div hb-s-col-offset=3 hb-s-col=8><h2 typewrite initial-delay=2250 type-delay=30 blink-cursor=false cursor=_ text={{hello.msg}} hb-c-text=mono hb-t-font=h2></h2></div></div></div></div><div ng-if=glitching><div class=glitch-mask></div></div>"
  );


  $templateCache.put('/app/bio/views/bio.html',
    "<div class=bio><div class=bio__header><div class=bio__left><img ng-src=/assets/img/me.png hb-s-pull=right width=120px></div><div class=bio__right><div hb-s-row hb-s-pt=2 hb-s-pb=4><h2 hb-t-font=h2>My name is Hunter Brennick and I am currently a senior at Georgia Institute of Technology pursuing a degree in Computer Science.</h2></div></div></div><div class=bio__body><div hb-s-row hb-s-pt=10 hb-s-pb=4><span hb-t-font=p>While I have been pursuing a degree in Computer Science, I have been working at various startups in a wide array of roles ranging from consulting to co-founding. Today, I work at a marketing automation company called Landing Lion that I co-founded with a team made up of primarily Georgia Tech graduates.</span></div><div hb-s-row hb-s-pb=4><span hb-t-font=p>I currently have a strong passion in data info-visualizations and deeply immersive and explorable analytics. I strive to allow people to look at data and analytical information in new, creative, and complex ways which have yet to be discovered.</span></div><div hb-s-row><span hb-t-font=p>I love working with passionate, hard working people that are consistently open-minded, level-headed and creative.</span></div></div></div>"
  );


  $templateCache.put('/app/projects/views/projects.html',
    "<div class=container ui-view></div>"
  );


  $templateCache.put('/app/projects/views/projects.list.html',
    "<div class=projects__left><div hb-s-row hb-s-pr=4 hb-s-pl=8 hb-s-py=5><div hb-s-row hb-s-pb=4><h5 hb-t-font=\"h5 small-caps\" hb-s-pb=3>Work</h5><div hb-s-row ng-repeat=\"project in projects\" hb-s-pl=1 hb-s-pb=2><h6 ng-click=goProject(project) hb-c-text=mono ng-class=\"{'nav__title--active': activeProjectNav.state === project.state}\" hb-t-font=\"link h6 small-caps\">{{::project.title}}</h6></div></div><div hb-s-row><h5 hb-t-font=\"h5 small-caps\" hb-s-pb=3>School</h5><div hb-s-row ng-repeat=\"schoolProject in schoolProjects\" hb-s-pl=1 hb-s-pb=2><h6 ng-click=goProject(schoolProject) hb-c-text=mono ng-class=\"{'nav__title--active': activeProjectNav.state === schoolProject.state}\" hb-t-font=\"link h6 small-caps\">{{::schoolProject.title}}</h6></div></div></div></div><div class=projects__right ui-view></div>"
  );


  $templateCache.put('/app/projects/views/projects.list.project.html',
    "<div class=project__header><div class=project__header-left hb-s-pt=4.5><img hb-t-font=interact ng-click=goForUrl(activeProject) ng-src={{activeProject.forLogoUrl}} width=60px></div><div class=project__header-right hb-s-py=4 hb-s-pl=4 hb-s-pr=10><div hb-s-row hb-s-py=.5><div hb-s-col=9><h4 hb-t-font=h4>{{activeProject.title}}</h4></div><div hb-s-col=3 hb-s-pt=1.5><span hb-s-pull=right hb-c-text=mono hb-t-font=small><span>{{activeProject.dateBegin | date:'MMM yyyy'}}</span> <span ng-if=activeProject.dateEnd.length>- {{activeProject.dateEnd.length ? (activeProject.dateEnd | date:'MMM yyyy') : 'Present'}}</span></span></div></div><div hb-s-row><h6 hb-c-text=mono hb-t-font=h6>{{activeProject.subtitle}}</h6></div></div></div><div class=project__body hb-s-pl=4 hb-s-pt=4 hb-s-pr=6><div hb-s-row ng-if=activeProject.bodyImgUrl.length><img ng-src={{activeProject.bodyImgUrl}}></div><div hb-s-row hb-s-pt=4><span hb-t-font=p>{{activeProject.body}}</span></div></div>"
  );

}]);
