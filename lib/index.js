var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var InApp=function(){



function InApp(useragent){_classCallCheck(this,InApp);this.useragent='';
this.useragent=useragent;
}_createClass(InApp,[{key:'isMobile',value:function isMobile()













{
return false;
}},{key:'isTablet',value:function isTablet()

{
return false;
}},{key:'isDesktop',value:function isDesktop()

{
return false;
}},{key:'inBot',value:function inBot()

{
return false;
}},{key:'isInApp',value:function isInApp()

{
return false;
}},{key:'isApplePay',value:function isApplePay()

{
return false;
}},{key:'isInstalled',value:function isInstalled(

app){
return false;
}},{key:'addMatch',value:function addMatch(

name,regex){
return this;
}},{key:'os',get:function get(){return'';}},{key:'device',get:function get(){return'';}},{key:'browser',get:function get(){return'';}}]);return InApp;}();


module.expect=InApp;