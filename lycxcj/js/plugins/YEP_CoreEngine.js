var Imported=Imported||{};Imported.YEP_CoreEngine=!0;var Yanfly=Yanfly||{};Yanfly.Core=Yanfly.Core||{},Yanfly.Parameters=PluginManager.parameters("YEP_CoreEngine"),Yanfly.Param=Yanfly.Param||{},Yanfly.Icon=Yanfly.Icon||{},Yanfly.Param.ScaleBattleback=String(Yanfly.Parameters["Scale Battlebacks"]),Yanfly.Param.ScaleTitle=String(Yanfly.Parameters["Scale Title"]),Yanfly.Param.OpenConsole=String(Yanfly.Parameters["Open Console"]),Yanfly.Param.DigitGroup=String(Yanfly.Parameters["Digit Grouping"]),Yanfly.Param.MaxItem=Number(Yanfly.Parameters["Default Max"]),Yanfly.Param.MaxLevel=Number(Yanfly.Parameters["Max Level"]),Yanfly.Param.AnimationRate=Number(Yanfly.Parameters["Animation Rate"]),Yanfly.Param.FlashTarget=String(Yanfly.Parameters["Flash Target"]),Yanfly.Param.ReposBattlers=String(Yanfly.Parameters["Reposition Battlers"]),Yanfly.Param.EnemyMaxHp=Number(Yanfly.Parameters["Enemy MaxHP"]),Yanfly.Param.EnemyMaxMp=Number(Yanfly.Parameters["Enemy MaxMP"]),Yanfly.Param.EnemyParam=Number(Yanfly.Parameters["Enemy Parameter"]),Yanfly.Param.ActorMaxHp=Number(Yanfly.Parameters["Actor MaxHP"]),Yanfly.Param.ActorMaxMp=Number(Yanfly.Parameters["Actor MaxMP"]),Yanfly.Param.ActorParam=Number(Yanfly.Parameters["Actor Parameter"]),Yanfly.Param.MaxGold=String(Yanfly.Parameters["Gold Max"]),Yanfly.Param.ChineseFont=String(Yanfly.Parameters["Chinese Font"]),Yanfly.Param.KoreanFont=String(Yanfly.Parameters["Korean Font"]),Yanfly.Param.DefaultFont=String(Yanfly.Parameters["Default Font"]),Yanfly.Param.FontSize=Number(Yanfly.Parameters["Font Size"]),Yanfly.Param.TextAlign=String(Yanfly.Parameters["Text Align"]),Yanfly.Param.LineHeight=Number(Yanfly.Parameters["Line Height"]),Yanfly.Param.GaugeOutline=String(Yanfly.Parameters["Gauge Outline"]),Yanfly.Param.GaugeHeight=Number(Yanfly.Parameters["Gauge Height"]),Yanfly.Param.WindowPadding=Number(Yanfly.Parameters["Window Padding"]),Yanfly.Param.TextPadding=Number(Yanfly.Parameters["Text Padding"]),Yanfly.Param.WindowOpacity=Number(Yanfly.Parameters["Window Opacity"]),Yanfly.Param.MenuTpGauge=String(Yanfly.Parameters["Menu TP Bar"]),Yanfly.Param.ColorNormal=Number(Yanfly.Parameters["Color: Normal"]),Yanfly.Param.ColorSystem=Number(Yanfly.Parameters["Color: System"]),Yanfly.Param.ColorCrisis=Number(Yanfly.Parameters["Color: Crisis"]),Yanfly.Param.ColorDeath=Number(Yanfly.Parameters["Color: Death"]),Yanfly.Param.ColorGaugeBack=Number(Yanfly.Parameters["Color: Gauge Back"]),Yanfly.Param.ColorHpGauge1=Number(Yanfly.Parameters["Color: HP Gauge 1"]),Yanfly.Param.ColorHpGauge2=Number(Yanfly.Parameters["Color: HP Gauge 2"]),Yanfly.Param.ColorMpGauge1=Number(Yanfly.Parameters["Color: MP Gauge 1"]),Yanfly.Param.ColorMpGauge2=Number(Yanfly.Parameters["Color: MP Gauge 2"]),Yanfly.Param.ColorMpCost=Number(Yanfly.Parameters["Color: MP Cost"]),Yanfly.Param.ColorPowerUp=Number(Yanfly.Parameters["Color: Power Up"]),Yanfly.Param.ColorPowerDown=Number(Yanfly.Parameters["Color: Power Down"]),Yanfly.Param.ColorTpGauge1=Number(Yanfly.Parameters["Color: TP Gauge 1"]),Yanfly.Param.ColorTpGauge2=Number(Yanfly.Parameters["Color: TP Gauge 2"]),Yanfly.Param.ColorTpCost=Number(Yanfly.Parameters["Color: TP Cost Color"]),Yanfly.Param.GoldFontSize=String(Yanfly.Parameters["Gold Font Size"]),Yanfly.Icon.Gold=Number(Yanfly.Parameters["Gold Icon"]),Yanfly.Param.GoldOverlap=String(Yanfly.Parameters["Gold Overlap"]),Yanfly.Param.ItemQuantitySize=Number(Yanfly.Parameters["Quantity Text Size"]),Yanfly.Core.Bitmap_initialize=Bitmap.prototype.initialize,Bitmap.prototype.initialize=function(t,a){Yanfly.Core.Bitmap_initialize.call(this,t,a),this.fontFace=Yanfly.Param.DefaultFont},Yanfly.Core.Sprite_updateTransform=Sprite.prototype.updateTransform,Sprite.prototype.updateTransform=function(){Yanfly.Core.Sprite_updateTransform.call(this),this.worldTransform.tx=Math.floor(this.worldTransform.tx),this.worldTransform.ty=Math.floor(this.worldTransform.ty)},Yanfly.Core.ScreenSprite_initialize=ScreenSprite.prototype.initialize,ScreenSprite.prototype.initialize=function(){Yanfly.Core.ScreenSprite_initialize.call(this),this.scale.x=10*Graphics.boxWidth,this.scale.y=10*Graphics.boxHeight,this.anchor.x=.5,this.anchor.y=.5,this.x=0,this.y=0},Yanfly.Core.DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded,DataManager.isDatabaseLoaded=function(){return!!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)&&(this.processCORENotetags1($dataItems),this.processCORENotetags1($dataWeapons),this.processCORENotetags1($dataArmors),this.processCORENotetags2($dataEnemies),this.processCORENotetags3($dataActors),this.processCORENotetags4($dataClasses),!0)},DataManager.processCORENotetags1=function(t){for(var a=1;a<t.length;a++){var e=t[a],r=e.note.split(/[\r\n]+/);e.maxItem=Yanfly.Param.MaxItem;for(var o=0;o<r.length;o++){var i=r[o];if(i.match(/<(?:PRICE):[ ](\d+)>/i))e.price=parseInt(RegExp.$1);else if(i.match(/<(?:MAX ITEM):[ ](\d+)>/i))e.maxItem=Math.max(1,parseInt(RegExp.$1));else if(i.match(/<(.*):[ ]([\+\-]\d+)>/i)){var n=String(RegExp.$1).toUpperCase(),s=parseInt(RegExp.$2);switch(n){case"HP":case"MAXHP":case"MAX HP":e.params[0]=s;break;case"MP":case"MAXMP":case"MAX MP":case"SP":case"MAXSP":case"MAX SP":e.params[1]=s;break;case"ATK":case"STR":e.params[2]=s;break;case"DEF":e.params[3]=s;break;case"MAT":case"INT":e.params[4]=s;break;case"MDF":case"RES":e.params[5]=s;break;case"AGI":case"SPD":e.params[6]=s;break;case"LUK":e.params[7]=s;break;case"EXP":case"XP":e.exp=s}}}}},DataManager.processCORENotetags2=function(t){for(var a=1;a<t.length;a++)for(var e=t[a],r=e.note.split(/[\r\n]+/),o=0;o<r.length;o++){var i=r[o];if(i.match(/<(?:GOLD):[ ](\d+)>/i))e.gold=parseInt(RegExp.$1);else if(i.match(/<(.*):[ ](\d+)>/i)){var n=String(RegExp.$1).toUpperCase(),s=parseInt(RegExp.$2);switch(n){case"HP":case"MAXHP":case"MAX HP":e.params[0]=s;break;case"MP":case"MAXMP":case"MAX MP":case"SP":case"MAXSP":case"MAX SP":e.params[1]=s;break;case"ATK":case"STR":e.params[2]=s;break;case"DEF":e.params[3]=s;break;case"MAT":case"INT":case"SPI":e.params[4]=s;break;case"MDF":case"RES":e.params[5]=s;break;case"AGI":case"SPD":e.params[6]=s;break;case"LUK":e.params[7]=s}}}},DataManager.processCORENotetags3=function(t){for(var a=1;a<t.length;a++){var e=t[a],r=e.note.split(/[\r\n]+/);e.maxLevel=Yanfly.Param.MaxLevel;for(var o=0;o<r.length;o++){var i=r[o];i.match(/<(?:MAX LEVEL):[ ](\d+)>/i)?(e.maxLevel=parseInt(RegExp.$1),e.maxLevel<1&&(e.maxLevel=1)):i.match(/<(?:INITIAL LEVEL):[ ](\d+)>/i)&&(e.initialLevel=parseInt(RegExp.$1),e.initialLevel<1&&(e.initialLevel=1))}}},DataManager.processCORENotetags4=function(t){for(var a=1;a<t.length;a++){var e=t[a];e.note.split(/[\r\n]+/);e.learnings.forEach((function(t){t.note.match(/<(?:LEARN LEVEL):[ ](\d+)>/i)&&(t.level=parseInt(RegExp.$1),t.level<1&&(e.maxLevel=1))}),this)}},SceneManager._screenWidth=Number(Yanfly.Parameters["Screen Width"]||816),SceneManager._screenHeight=Number(Yanfly.Parameters["Screen Height"]||624),SceneManager._boxWidth=Number(Yanfly.Parameters["Screen Width"]||816),SceneManager._boxHeight=Number(Yanfly.Parameters["Screen Height"]||624),Yanfly.Core.SceneManager_run=SceneManager.run,SceneManager.run=function(sceneClass){if(Yanfly.Core.SceneManager_run.call(this,sceneClass),!Utils.isMobileDevice()&&!Utils.isMobileSafari()&&!Utils.isAndroidChrome()){var resizeWidth=Graphics.boxWidth-window.innerWidth,resizeHeight=Graphics.boxHeight-window.innerHeight;eval(Yanfly.Param.OpenConsole)&&this.openConsole(),Imported.ScreenResolution||(window.moveBy(-1*resizeWidth/2,-1*resizeHeight/2),window.resizeBy(resizeWidth,resizeHeight))}},SceneManager.openConsole=function(){Utils.isNwjs()&&Utils.isOptionValid("test")&&(require("nw.gui").Window.get().showDevTools().moveTo(0,0),window.focus())},Yanfly.Core.BattleManager_displayStartMessages=BattleManager.displayStartMessages,BattleManager.displayStartMessages=function(){Yanfly.Core.BattleManager_displayStartMessages.call(this),$gameTroop.members().forEach((function(t){t.recoverAll()}))},Yanfly.Core.Scene_Title_start=Scene_Title.prototype.start,Scene_Title.prototype.start=function(){Yanfly.Core.Scene_Title_start.call(this),eval(Yanfly.Param.ScaleTitle)&&this.rescaleTitle()},Scene_Title.prototype.rescaleTitle=function(){this.rescaleTitleSprite(this._backSprite1),this.rescaleTitleSprite(this._backSprite2)},Scene_Title.prototype.rescaleTitleSprite=function(t){if(!(t.bitmap.width<=0||t.bitmap<=0)){var a=Graphics.boxWidth,e=Graphics.boxHeight,r=a/t.bitmap.width,o=e/t.bitmap.height;r>1&&(t.scale.x=r),o>1&&(t.scale.y=o),this.centerSprite(t)}},Sprite_Animation.prototype.setupRate=function(){this._rate=Yanfly.Param.AnimationRate},eval(Yanfly.Param.FlashTarget)||(Yanfly.Core.Sprite_Battler_updateSelectionEffect=Sprite_Battler.prototype.updateSelectionEffect,Sprite_Battler.prototype.updateSelectionEffect=function(){this._battler.isActor()?Yanfly.Core.Sprite_Battler_updateSelectionEffect.call(this):this._battler.isSelected()&&this.startEffect("whiten")}),eval(Yanfly.Param.ReposBattlers)&&(Yanfly.Core.Sprite_Actor_setActorHome=Sprite_Actor.prototype.setActorHome,Sprite_Actor.prototype.setActorHome=function(t){Yanfly.Core.Sprite_Actor_setActorHome.call(this,t),this._homeX+=Graphics.boxWidth-816,this._homeY+=Graphics.boxHeight-624}),eval(Yanfly.Param.ReposBattlers)&&(Yanfly.Core.Sprite_Enemy_setBattler=Sprite_Enemy.prototype.setBattler,Sprite_Enemy.prototype.setBattler=function(t){Yanfly.Core.Sprite_Enemy_setBattler.call(this,t),this._homeY+=Graphics.boxHeight-624,$gameSystem.isSideView()||(this._homeX+=(Graphics.boxWidth-816)/2)}),Sprite_StateIcon._iconWidth=Number(Yanfly.Parameters["Icon Width"]||32),Sprite_StateIcon._iconHeight=Number(Yanfly.Parameters["Icon Height"]||32),Sprite_Button.prototype.isButtonTouched=function(){var t=this.canvasToLocalX(TouchInput.x)+this.anchor.x*this.width,a=this.canvasToLocalY(TouchInput.y)+this.anchor.y*this.height;return t>=0&&a>=0&&t<this.width&&a<this.height},Yanfly.Core.Spriteset_Battle_locateBattleback=Spriteset_Battle.prototype.locateBattleback,Spriteset_Battle.prototype.locateBattleback=function(){Yanfly.Core.Spriteset_Battle_locateBattleback.call(this),eval(Yanfly.Param.ScaleBattleback)&&this.rescaleBattlebacks()},Spriteset_Battle.prototype.rescaleBattlebacks=function(){this.rescaleBattlebackSprite(this._back1Sprite),this.rescaleBattlebackSprite(this._back2Sprite)},Spriteset_Battle.prototype.rescaleBattlebackSprite=function(t){if(!(t.bitmap.width<=0||t.bitmap<=0)){var a=this._battleField.width,e=this._battleField.height,r=t.x,o=t.y,i=a/t.bitmap.width,n=e/t.bitmap.height;i>1&&(t.scale.x=i,t.origin.x=0,r=0),n>1&&(t.scale.y=n,t.origin.y=0,o=0),t.x=Math.min(0,r),t.y=Math.min(0,o)}},Game_BattlerBase.prototype.paramMax=function(t){return 0===t?Yanfly.Param.EnemyMaxHp:1===t?Yanfly.Param.EnemyMaxMp:Yanfly.Param.EnemyParam},Yanfly.Core.Game_Actor_isMaxLevel=Game_Actor.prototype.isMaxLevel,Game_Actor.prototype.isMaxLevel=function(){return 0!=this.maxLevel()&&Yanfly.Core.Game_Actor_isMaxLevel.call(this)},Game_Actor.prototype.paramMax=function(t){return 0===t?Yanfly.Param.ActorMaxHp:1===t?Yanfly.Param.ActorMaxMp:Yanfly.Param.ActorParam},Yanfly.Core.Game_Actor_paramBase=Game_Actor.prototype.paramBase,Game_Actor.prototype.paramBase=function(t){if(this.level>99){var a=this.currentClass().params[t][99];return a+=(a-this.currentClass().params[t][98])*(this.level-99)}return Yanfly.Core.Game_Actor_paramBase.call(this,t)},Game_Party.prototype.maxGold=function(){return eval(Yanfly.Param.MaxGold)},Game_Party.prototype.maxItems=function(t){return t?t.maxItem:1},Game_Map.prototype.displayX=function(){return parseFloat(Math.floor(this._displayX*this.tileWidth()))/this.tileWidth()},Game_Map.prototype.displayY=function(){return parseFloat(Math.floor(this._displayY*this.tileHeight()))/this.tileHeight()},Game_Map.prototype.adjustX=function(t){return this.isLoopHorizontal()&&t<this.displayX()-(this.width()-this.screenTileX())/2?t-this.displayX()+$dataMap.width:t-this.displayX()},Game_Map.prototype.adjustY=function(t){return this.isLoopVertical()&&t<this.displayY()-(this.height()-this.screenTileY())/2?t-this.displayY()+$dataMap.height:t-this.displayY()},Game_CharacterBase.prototype.update=function(){this.isJumping()?this.updateJump():this.isMoving()&&this.updateMove(),this.isMoving()||this.updateStop(),this.updateAnimation()},Yanfly.Core.Game_CharacterBase_updateMove=Game_CharacterBase.prototype.updateMove,Game_CharacterBase.prototype.updateMove=function(){Yanfly.Core.Game_CharacterBase_updateMove.call(this),this.isMoving()||this.updateStop()},Game_Character.prototype.queueMoveRoute=function(t){this._originalMoveRoute=t,this._originalMoveRouteIndex=0},Yanfly.Core.Game_Event_setMoveRoute=Game_Event.prototype.setMoveRoute,Game_Character.prototype.setMoveRoute=function(t){this._moveRouteForcing?this.queueMoveRoute(t):Yanfly.Core.Game_Event_setMoveRoute.call(this,t)},Game_Event.prototype.isCollidedWithEvents=function(t,a){return!($gameMap.eventsXyNt(t,a).filter((function(t){return t.isNormalPriority()})).length<=0)&&this.isNormalPriority()},Yanfly.Core.Game_Interpreter_pluginCommand=Game_Interpreter.prototype.pluginCommand,Game_Interpreter.prototype.pluginCommand=function(t,a){Yanfly.Core.Game_Interpreter_pluginCommand.call(this,t,a),"GainGold"===t&&$gameParty.gainGold(parseInt(a[0])),"LoseGold"===t&&$gameParty.loseGold(parseInt(a[0]))},Window_Base._iconWidth=Number(Yanfly.Parameters["Icon Width"]||32),Window_Base._iconHeight=Number(Yanfly.Parameters["Icon Height"]||32),Window_Base._faceWidth=Number(Yanfly.Parameters["Face Width"]||144),Window_Base._faceHeight=Number(Yanfly.Parameters["Face Height"]||144),Window_Base.prototype.lineHeight=function(){return Yanfly.Param.LineHeight},Window_Base.prototype.textWidthEx=function(t){return this.drawTextEx(t,0,this.contents.height)},Window_Base.prototype.standardFontFace=function(){return $gameSystem.isChinese()?Yanfly.Param.ChineseFont:$gameSystem.isKorean()?Yanfly.Param.KoreanFont:Yanfly.Param.DefaultFont},Window_Base.prototype.standardFontSize=function(){return Yanfly.Param.FontSize},Window_Base.prototype.standardPadding=function(){return Yanfly.Param.WindowPadding},Window_Base.prototype.textPadding=function(){return Yanfly.Param.TextPadding},Window_Base.prototype.standardBackOpacity=function(){return Yanfly.Param.WindowOpacity},Window_Base.prototype.normalColor=function(){return this.textColor(Yanfly.Param.ColorNormal)},Window_Base.prototype.systemColor=function(){return this.textColor(Yanfly.Param.ColorSystem)},Window_Base.prototype.crisisColor=function(){return this.textColor(Yanfly.Param.ColorCrisis)},Window_Base.prototype.deathColor=function(){return this.textColor(Yanfly.Param.ColorDeath)},Window_Base.prototype.gaugeBackColor=function(){return this.textColor(Yanfly.Param.ColorGaugeBack)},Window_Base.prototype.hpGaugeColor1=function(){return this.textColor(Yanfly.Param.ColorHpGauge1)},Window_Base.prototype.hpGaugeColor2=function(){return this.textColor(Yanfly.Param.ColorHpGauge2)},Window_Base.prototype.mpGaugeColor1=function(){return this.textColor(Yanfly.Param.ColorMpGauge1)},Window_Base.prototype.mpGaugeColor2=function(){return this.textColor(Yanfly.Param.ColorMpGauge2)},Window_Base.prototype.mpCostColor=function(){return this.textColor(Yanfly.Param.ColorMpCost)},Window_Base.prototype.powerUpColor=function(){return this.textColor(Yanfly.Param.ColorPowerUp)},Window_Base.prototype.powerDownColor=function(){return this.textColor(Yanfly.Param.ColorPowerDown)},Window_Base.prototype.tpGaugeColor1=function(){return this.textColor(Yanfly.Param.ColorTpGauge1)},Window_Base.prototype.tpGaugeColor2=function(){return this.textColor(Yanfly.Param.ColorTpGauge2)},Window_Base.prototype.tpCostColor=function(){return this.textColor(Yanfly.Param.ColorTpCost)},Window_Base.prototype.drawGauge=function(dx,dy,dw,rate,color1,color2){var color3=this.gaugeBackColor(),fillW=Math.floor(dw*rate).clamp(0,dw),gaugeH=this.gaugeHeight(),gaugeY=dy+this.lineHeight()-gaugeH-2;if(eval(Yanfly.Param.GaugeOutline))color3.paintOpacity=this.translucentOpacity(),this.contents.fillRect(dx,gaugeY-1,dw+2,gaugeH+2,color3),dx+=1;else{var fillW=Math.floor(dw*rate),gaugeY=dy+this.lineHeight()-gaugeH-2;this.contents.fillRect(dx,gaugeY,dw,gaugeH,color3)}this.contents.gradientFillRect(dx,gaugeY,fillW,gaugeH,color1,color2)},Window_Base.prototype.gaugeHeight=function(){return Yanfly.Param.GaugeHeight},Window_Base.prototype.drawActorLevel=function(t,a,e){this.changeTextColor(this.systemColor());var r=this.textWidth(TextManager.levelA);this.drawText(TextManager.levelA,a,e,r),this.resetTextColor();var o=Yanfly.Util.toGroup(t.level),i=this.textWidth(Yanfly.Util.toGroup(t.maxLevel()));this.drawText(o,a+r,e,i,"right")},Window_Base.prototype.drawCurrentAndMax=function(t,a,e,r,o,i,n){var s=this.textWidth("HP"),l=this.textWidth(Yanfly.Util.toGroup(a)),h=this.textWidth("/"),p=e+o-l,c=p-h,m=c-l;m>=e+s?(this.changeTextColor(i),this.drawText(Yanfly.Util.toGroup(t),m,r,l,"right"),this.changeTextColor(n),this.drawText("/",c,r,h,"right"),this.drawText(Yanfly.Util.toGroup(a),p,r,l,"right")):(this.changeTextColor(i),this.drawText(Yanfly.Util.toGroup(t),p,r,l,"right"))},Window_Base.prototype.drawActorTp=function(t,a,e,r){r=r||96;var o=this.tpGaugeColor1(),i=this.tpGaugeColor2();this.drawGauge(a,e,r,t.tpRate(),o,i),this.changeTextColor(this.systemColor()),this.drawText(TextManager.tpA,a,e,44),this.changeTextColor(this.tpColor(t)),this.drawText(Yanfly.Util.toGroup(t.tp),a+r-64,e,64,"right")},Window_Base.prototype.drawActorSimpleStatus=function(actor,x,y,width){var lineHeight=this.lineHeight(),xpad=Window_Base._faceWidth+2*Yanfly.Param.TextPadding,x2=x+xpad,width2=Math.max(200,width-xpad-this.textPadding());this.drawActorName(actor,x,y),this.drawActorLevel(actor,x,y+1*lineHeight),this.drawActorIcons(actor,x,y+2*lineHeight),this.drawActorClass(actor,x2,y,width2),this.drawActorHp(actor,x2,y+1*lineHeight,width2),this.drawActorMp(actor,x2,y+2*lineHeight,width2),eval(Yanfly.Param.MenuTpGauge)&&this.drawActorTp(actor,x2,y+3*lineHeight,width2)},Window_Base.prototype.drawCurrencyValue=function(t,a,e,r,o){if(this.resetTextColor(),this.contents.fontSize=Yanfly.Param.GoldFontSize,this.usingGoldIcon(a))var i=Window_Base._iconWidth;else i=this.textWidth(a);var n=Yanfly.Util.toGroup(t);this.textWidth(n)>o-i&&(n=Yanfly.Param.GoldOverlap),this.drawText(n,e,r,o-i-4,"right"),this.usingGoldIcon(a)?this.drawIcon(Yanfly.Icon.Gold,e+o-Window_Base._iconWidth,r+2):(this.changeTextColor(this.systemColor()),this.drawText(a,e,r,o,"right")),this.resetFontSettings()},Window_Base.prototype.usingGoldIcon=function(t){return t===TextManager.currencyUnit&&Yanfly.Icon.Gold>0},Window_Base.prototype.drawItemName=function(t,a,e,r){if(r=r||312,t){var o=this.lineHeight(),i=(o-Window_Base._iconWidth)/2;this.resetTextColor(),this.drawIcon(t.iconIndex,a+i,e+i),this.drawText(t.name,a+o,e,r-o)}},Window_Command.prototype.itemTextAlign=function(){return Yanfly.Param.TextAlign},Window_MenuStatus.prototype.drawItemStatus=function(index){var actor=$gameParty.members()[index],rect=this.itemRect(index),xpad=Yanfly.Param.WindowPadding+Window_Base._faceWidth,x=rect.x+xpad;if(eval(Yanfly.Param.MenuTpGauge))var y=rect.y;else var y=rect.y+rect.height/2-1.5*this.lineHeight();var width=rect.width-x-this.textPadding();this.drawActorSimpleStatus(actor,x,y,width)},Window_ItemList.prototype.numberWidth=function(){return this.textWidth("×0,000")},Window_ItemList.prototype.drawItemNumber=function(t,a,e,r){if(this.needsNumber()){var o=Yanfly.Util.toGroup($gameParty.numItems(t));this.contents.fontSize=Yanfly.Param.ItemQuantitySize,this.drawText("×"+o,a,e,r,"right"),this.resetFontSettings()}},Window_SkillStatus.prototype.refresh=function(){if(this.contents.clear(),this._actor){var w=this.width-2*this.padding,h=this.height-2*this.padding;if(eval(Yanfly.Param.MenuTpGauge))var y=0;else var y=h/2-1.5*this.lineHeight();var xpad=Yanfly.Param.WindowPadding+Window_Base._faceWidth,width=w-xpad-this.textPadding();this.drawActorFace(this._actor,0,0,Window_Base._faceWidth,h),this.drawActorSimpleStatus(this._actor,xpad,y,width)}},Window_SkillList.prototype.drawSkillCost=function(t,a,e,r){if(this._actor.skillTpCost(t)>0){this.changeTextColor(this.tpCostColor());var o=Yanfly.Util.toGroup(this._actor.skillTpCost(t));this.drawText(o,a,e,r,"right")}else if(this._actor.skillMpCost(t)>0){this.changeTextColor(this.mpCostColor());o=Yanfly.Util.toGroup(this._actor.skillMpCost(t));this.drawText(o,a,e,r,"right")}},Window_EquipStatus.prototype.drawCurrentParam=function(t,a,e){this.resetTextColor();var r=Yanfly.Util.toGroup(this._actor.param(e));this.drawText(r,t,a,48,"right")},Window_EquipStatus.prototype.drawNewParam=function(t,a,e){var r=this._tempActor.param(e),o=r-this._actor.param(e),i=Yanfly.Util.toGroup(r);this.changeTextColor(this.paramchangeTextColor(o)),this.drawText(i,t,a,48,"right")},Window_SkillType.prototype.makeCommandList=function(){if(this._actor){var t=this._actor.addedSkillTypes();t.sort((function(t,a){return t-a})),t.forEach((function(t){var a=$dataSystem.skillTypes[t];this.addCommand(a,"skill",!0,t)}),this)}},Window_ActorCommand.prototype.addSkillCommands=function(){var t=this._actor.addedSkillTypes();t.sort((function(t,a){return t-a})),t.forEach((function(t){var a=$dataSystem.skillTypes[t];this.addCommand(a,"skill",!0,t)}),this)},Window_Status.prototype.drawParameters=function(t,a){for(var e=this.lineHeight(),r=0;r<6;r++){var o=r+2,i=a+e*r;this.changeTextColor(this.systemColor()),this.drawText(TextManager.param(o),t,i,160),this.resetTextColor();var n=Yanfly.Util.toGroup(this._actor.param(o)),s=this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(r+2)));this.drawText(n,t+160,i,s,"right")}},Window_Status.prototype.drawExpInfo=function(t,a){var e=this.lineHeight(),r=TextManager.expTotal.format(TextManager.exp),o=TextManager.expNext.format(TextManager.level),i=this._actor.currentExp(),n=this._actor.nextRequiredExp();this._actor.isMaxLevel()?(i="-------",n="-------"):(i=Yanfly.Util.toGroup(i),n=Yanfly.Util.toGroup(n)),this.changeTextColor(this.systemColor()),this.drawText(r,t,a+0*e,270),this.drawText(o,t,a+2*e,270),this.resetTextColor(),this.drawText(i,t,a+1*e,270,"right"),this.drawText(n,t,a+3*e,270,"right")},Window_ShopBuy.prototype.drawItem=function(t){var a=this._data[t],e=this.itemRect(t);e.width-=this.textPadding(),this.changePaintOpacity(this.isEnabled(a)),this.drawItemName(a,e.x,e.y,e.width),this.contents.fontSize=Yanfly.Param.GoldFontSize;var r=Yanfly.Util.toGroup(this.price(a));this.drawText(r,e.x,e.y,e.width,"right"),this.changePaintOpacity(!0),this.resetFontSettings()},Window_ShopNumber.prototype.drawNumber=function(){var t=this.cursorX(),a=this.itemY(),e=this.cursorWidth()-this.textPadding();this.resetTextColor();var r=Yanfly.Util.toGroup(this._number);this.drawText(r,t,a,e,"right")},Window_BattleStatus.prototype.gaugeAreaWidth=function(){return this.width/2+this.standardPadding()},Window_BattleStatus.prototype.drawBasicArea=function(t,a){var e=2*Window_Base._iconWidth,r=16*this.textWidth("0")+6,o=Math.max(t.width-r,e),i=t.width-o;this.drawActorName(a,t.x+0,t.y,i),this.drawActorIcons(a,t.x+i,t.y,o)},Window_BattleStatus.prototype.drawGaugeAreaWithTp=function(t,a){var e=this.gaugeAreaWidth()-30,r=parseInt(108*e/300),o=parseInt(96*e/300);this.drawActorHp(a,t.x+0,t.y,r),this.drawActorMp(a,t.x+r+15,t.y,o),this.drawActorTp(a,t.x+r+o+30,t.y,o)},Window_BattleStatus.prototype.drawGaugeAreaWithoutTp=function(t,a){var e=this.gaugeAreaWidth()-15,r=parseInt(201*e/315),o=parseInt(114*e/315);this.drawActorHp(a,t.x+0,t.y,r),this.drawActorMp(a,t.x+r+15,t.y,o)},Window_BattleLog.prototype.showNormalAnimation=function(t,a,e){var r=$dataAnimations[a];if(r)if(3===r.position)t.forEach((function(t){t.startAnimation(a,e,0)}));else{var o=this.animationBaseDelay(),i=this.animationNextDelay();t.forEach((function(t){t.startAnimation(a,e,o),o+=i}))}},Yanfly.Util=Yanfly.Util||{},Yanfly.Util.toGroup=function(inVal){return"string"!=typeof inVal&&(inVal=String(inVal)),eval(Yanfly.Param.DigitGroup)?inVal.replace(/(^|[^\w.])(\d{4,})/g,(function(t,a,e){return a+e.replace(/\d(?=(?:\d\d\d)+(?!\d))/g,"$&,")})):inVal};