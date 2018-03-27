require=function e(s,u,a){function r(o,t){if(!u[o]){if(!s[o]){var i="function"==typeof require&&require;if(!t&&i)return i(o,!0);if(l)return l(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var n=u[o]={exports:{}};s[o][0].call(n.exports,function(t){var i=s[o][1][t];return r(i||t)},n,n.exports,e,s,u,a)}return u[o].exports}for(var l="function"==typeof require&&require,t=0;t<a.length;t++)r(a[t]);return r}({ButtonEvent:[function(t,i,o){"use strict";cc._RF.push(i,"9deefm20ldNcYaxOLnJClw3","ButtonEvent"),cc.Class({extends:cc.Component,properties:{audiose:{default:null,url:cc.AudioClip}},start:function(){},loadTitle:function(){cc.audioEngine.playEffect(this.audiose,!1),cc.director.loadScene("Game")},loadMain:function(){cc.audioEngine.playEffect(this.audiose,!1),cc.director.loadScene("Main")}}),cc._RF.pop()},{}],CreditButton:[function(t,i,o){"use strict";cc._RF.push(i,"8a710n4TudOWIJ3qNFUMlA2","CreditButton"),cc.Class({extends:cc.Component,properties:{audiose:{default:null,url:cc.AudioClip},creditNode:{default:null,type:cc.Node},buttons:[cc.Button]},start:function(){},onButtonClick:function(){cc.audioEngine.playEffect(this.audiose,!1),this.buttons.forEach(function(t){t.interactable=!1}),this.creditNode.opacity=255}}),cc._RF.pop()},{}],GameOver:[function(t,i,o){"use strict";cc._RF.push(i,"c62cc5Mtp9HMYzH6z9l7Fgx","GameOver"),cc.Class({extends:cc.Component,properties:{momijiLabel:{default:null,type:cc.Label},subLabel:{default:null,type:cc.Label}},start:function(){var t=cc.sys.localStorage.getItem("momiji");this.momijiLabel.string=t+"まい";var i="";i=37==t?"\n（うたのおねえさんとコラボしてほしい）":t<=5?"ヒント　「むかで」と「くっきー」をうまくつかおう":t<=15?"ヒント　「くっきー」はれんぞくでつかえないよ":t<=30?"もみじは　どうして　ひとを　おそうんだろうね\nきみは　だれかを　きずつけたことは　あるかな？":t<=60?"きみには　なにが　みえているの？\nぼくには　もみじなんて・・・":t<=80?"いいんちょうは　まもられたよ\nせいそな　いいんちょうはね":t<100?"ひとは　ときに　いろんなりゆうで　たにんを\nきずつけるよね。　どんな　りゆうでも\nいたいのは　いたいし　いやなことは　いやだよ":"こんなに　あそんでくれて　ありがとう\nたのしんでくれたかな？　えがおが　いちばんだよね",this.subLabel.string=i}}),cc._RF.pop()},{}],Game:[function(t,i,o){"use strict";cc._RF.push(i,"6e442CkOmVIIb/HyDWJJRx0","Game"),cc.Class({extends:cc.Component,properties:{Cursol:{default:null,type:cc.Node}},onLoad:function(){this.node.on(cc.Node.EventType.MOUSE_MOVE,function(t){this.Cursol.x=t.getLocation().x,this.Cursol.y=t.getLocation().y},this),this.node.on(cc.Node.EventType.MOUSE_DOWN,function(t){this.Cursol.getComponent("Cursol").down()},this),this.node.on(cc.Node.EventType.MOUSE_UP,function(t){this.Cursol.getComponent("Cursol").up()},this)},start:function(){}}),cc._RF.pop()},{}],Hitpoint:[function(t,i,o){"use strict";cc._RF.push(i,"d154er2csZLCbLAoNDr0tMv","Hitpoint"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],MainGame:[function(t,i,o){"use strict";cc._RF.push(i,"e4432fEqkNISLuY2/0vE1ZT","MainGame"),cc.Class({extends:cc.Component,properties:{momijiPrefab:{default:null,type:cc.Prefab},kurobaPrefab:{default:null,type:cc.Prefab},mito:{default:null,type:cc.Node},hpNode:{default:null,type:cc.Node},emptyNode:{default:null,type:cc.Node},momijiNode:{default:null,type:cc.Node},damagese:{default:null,url:cc.AudioClip},nikuse:{default:null,url:cc.AudioClip},nikubtn:{default:null,type:cc.Node},kurobas:[cc.Node],maxHP:0,hp:0,isHpup:!0,countm:0},start:function(){this.hp=this.maxHP,this.kurobas=[],this.drawKuroba(),this.spawnMomiji(),this.scheduleSpawn(3)},drawKuroba:function(){this.kurobas.forEach(function(t){t.destroy()}),this.kurobas=[];for(var t=0;t<this.hp;t++){var i=cc.instantiate(this.kurobaPrefab);this.hpNode.addChild(i),i.setPosition(250+200*t,600),this.kurobas.push(i)}},spawnMomiji:function(){var t=cc.instantiate(this.momijiPrefab);this.emptyNode.addChild(t);var i=t.getComponent("momiji");i.game=this,i.setDiff(1),t.setPosition(this.getNewMomijiPosition())},getNewMomijiPosition:function(){var t=cc.random0To1()*this.node.height,i=0;return cc.random0To1()<.5&&(i=this.node.width-150),i+=150*cc.random0To1(),cc.p(i,t)},scheduleSpawn:function(t){this.schedule(function(){this.spawnMomiji()}.bind(this),t)},hitDamage:function(t){0!=t&&(this.hpChange(t),0<t?(this.mito.color=new cc.Color(255,120,120),cc.audioEngine.playEffect(this.damagese,!1),this.countm-=1,this.countm<0&&(this.countm=0)):this.mito.color=new cc.Color(120,255,120),this.schedule(function(){this.mito.color=cc.Color.WHITE}.bind(this),.1,0,0))},hpChange:function(t){this.hp-=t,this.hp<=0?(cc.sys.localStorage.setItem("momiji",this.momijiNode.getComponent("momijiCount").getMomijiCount(0)),cc.director.loadScene("GameOver")):this.hp>this.maxHP&&(this.hp=this.maxHP),this.drawKuroba()},onMomijiBreak:function(){this.momijiNode.getComponent("momijiCount").updateLabel()},hpUp:function(){this.hp!=this.maxHP&&this.isHpup&&(this.nikubtn.color=cc.Color.GRAY,this.schedule(function(){this.nikubtn.color=cc.Color.WHITE,this.isHpup=!0}.bind(this),5,0,0),this.nikubtn.color,this.countm+=10,this.hpChange(-1),cc.audioEngine.playEffect(this.nikuse,!1),this.isHpup=!1)}}),cc._RF.pop()},{}],StartButton:[function(t,i,o){"use strict";cc._RF.push(i,"3b4f6sRQJlFrKc6NtifmDX4","StartButton"),cc.Class({extends:cc.Component,properties:{audiose:{default:null,url:cc.AudioClip},bgm:{default:null,url:cc.AudioClip}},start:function(){cc.audioEngine.stopMusic(),cc.audioEngine.playMusic(this.bgm,!0)},onButtonClick:function(){cc.audioEngine.playEffect(this.audiose,!1),cc.director.loadScene("Main")}}),cc._RF.pop()},{}],TutorialButton:[function(t,i,o){"use strict";cc._RF.push(i,"c1283/joehOPq1a2ut6sp+t","TutorialButton"),cc.Class({extends:cc.Component,properties:{audiose:{default:null,url:cc.AudioClip}},start:function(){},onButtonClick:function(){cc.audioEngine.playEffect(this.audiose,!1)}}),cc._RF.pop()},{}],credit:[function(t,i,o){"use strict";cc._RF.push(i,"a5972h5+tZP54Xxzo5fruuT","credit"),cc.Class({extends:cc.Component,properties:{backNode:{default:null,type:cc.Node},subNode:{default:null,type:cc.Node},buttons:[cc.Button]},start:function(){this.backNode.on(cc.Node.EventType.MOUSE_DOWN,function(t){this.buttons.forEach(function(t){t.interactable=!0}),this.node.opacity=0,this.subNode.opacity=0},this)}}),cc._RF.pop()},{}],mito:[function(t,i,o){"use strict";cc._RF.push(i,"e5831YiCEBATbdECDi1Uowi","mito"),cc.Class({extends:cc.Component,properties:{},start:function(){},onEnable:function(){cc.director.getCollisionManager().enabled=!0},onCollisionEnter:function(t,i){}}),cc._RF.pop()},{}],momijiCount:[function(t,i,o){"use strict";cc._RF.push(i,"5a64cJ7W+dEZYxmbASzSjxc","momijiCount"),cc.Class({extends:cc.Component,properties:{momijiLabel:{default:null,type:cc.Label},momijiCount:0},start:function(){},updateLabel:function(){this.momijiCount++,this.momijiLabel.string=this.momijiCount+""},getMomijiCount:function(){return this.momijiCount}}),cc._RF.pop()},{}],momiji:[function(t,i,o){"use strict";cc._RF.push(i,"95af4BwiClDsaGt9eZSfHzl","momiji"),cc.Class({extends:cc.Component,properties:{audiose:{default:null,url:cc.AudioClip},x:0,y:0,diff:0},start:function(){var t=cc.random0To1();t<1?(t=3*cc.random0To1(),t+=2):(t*=5,t+=3),this.node.runAction(cc.moveTo(t,this.x,this.y)),this.node.on(cc.Node.EventType.MOUSE_DOWN,function(t){cc.random0To1()<=this.diff&&this.game.spawnMomiji(),this.game.countm+=1,this.game.countm%50==0&&this.game.scheduleSpawn(10),cc.audioEngine.playEffect(this.audiose,!1),this.game.onMomijiBreak(),this.node.destroy()},this)},onEnable:function(){cc.director.getCollisionManager().enabled=!0},onCollisionEnter:function(t,i){switch(t.tag){case 10:this.game.hitDamage(1),this.node.destroy();break;case 11:cc.random0To1()<=.9*this.diff&&this.game.spawnMomiji(),this.game.countm+=1,cc.audioEngine.playEffect(this.audiose,!1),this.game.onMomijiBreak(),this.node.destroy()}},setDiff:function(t){this.diff=t},game:null}),cc._RF.pop()},{}],mukade:[function(t,i,o){"use strict";cc._RF.push(i,"f7749y/GehBz6GnJYx633kH","mukade"),cc.Class({extends:cc.Component,properties:{startPos:new cc.Vec2,endPos:new cc.Vec2,isPush:!0,mukadese:{default:null,url:cc.AudioClip},but:{default:null,type:cc.Node}},start:function(){this.startPos=this.node.position},moveAction:function(){this.isPush&&(cc.audioEngine.playEffect(this.mukadese,!1),this.node.position=this.startPos,this.node.runAction(cc.moveTo(3,this.endPos)),this.but.color=cc.Color.GRAY,this.isPush=!1,this.schedule(function(){this.but.color=cc.Color.WHITE,this.isPush=!0}.bind(this),3.1,0,0))}}),cc._RF.pop()},{}]},{},["ButtonEvent","CreditButton","Game","GameOver","Hitpoint","MainGame","StartButton","TutorialButton","credit","mito","momiji","momijiCount","mukade"]);