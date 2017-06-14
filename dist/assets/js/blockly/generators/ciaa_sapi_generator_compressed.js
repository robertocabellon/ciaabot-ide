"use strict";goog.provide("Blockly.CiaaSapi"),goog.require("Blockly.Generator"),Blockly.CiaaSapi=new Blockly.Generator("CiaaSapi"),Blockly.CiaaSapi.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts"),Blockly.CiaaSapi.ORDER_ATOMIC=0,Blockly.CiaaSapi.ORDER_UNARY_POSTFIX=1,Blockly.CiaaSapi.ORDER_UNARY_PREFIX=2,Blockly.CiaaSapi.ORDER_MULTIPLICATIVE=3,Blockly.CiaaSapi.ORDER_ADDITIVE=4,Blockly.CiaaSapi.ORDER_SHIFT=5,Blockly.CiaaSapi.ORDER_RELATIONAL=6,Blockly.CiaaSapi.ORDER_EQUALITY=7,Blockly.CiaaSapi.ORDER_BITWISE_AND=8,Blockly.CiaaSapi.ORDER_BITWISE_XOR=9,Blockly.CiaaSapi.ORDER_BITWISE_OR=10,Blockly.CiaaSapi.ORDER_LOGICAL_AND=11,Blockly.CiaaSapi.ORDER_LOGICAL_OR=12,Blockly.CiaaSapi.ORDER_CONDITIONAL=13,Blockly.CiaaSapi.ORDER_ASSIGNMENT=14,Blockly.CiaaSapi.ORDER_NONE=99;var profile={edu_ciaa:{description:"EDU-CIAA-NXP board",digital:[["Gpio 0","GPIO0"],["Gpio 1","GPIO1"],["Gpio 2","GPIO2"],["Gpio 3","GPIO3"],["Gpio 4","GPIO4"],["Gpio 5","GPIO5"],["Gpio 6","GPIO6"],["Gpio 7","GPIO7"],["Gpio 8","GPIO8"]],leds:[["Led 1","LED1"],["Led 2","LED2"],["Led 3","LED3"],["Led Rojo","LEDR"],["Led Verde","LEDG"],["Led Azul","LEDB"]],buttons:[["Tecla 1","TEC1"],["Tecla 2","TEC2"],["Tecla 3","TEC3"],["Tecla 4","TEC4"]],adc:[["Canal 1","CH1"],["Canal 2","CH2"],["Canal 3","CH3"]],dac:[["DAC","DAC"]],serial:9600,pwm:[["PWM0","PWM0"],["PWM1","PWM1"],["PWM2","PWM2"],["PWM3","PWM3"],["PWM4","PWM4"],["PWM5","PWM5"],["PWM6","PWM6"],["PWM7","PWM7"],["PWM8","PWM8"],["PWM9","PWM9"],["PWM10","PWM10"]],servo:[["SERVO0","SERVO0"],["SERVO1","SERVO1"],["SERVO2","SERVO2"],["SERVO3","SERVO3"],["SERVO4","SERVO4"],["SERVO5","SERVO5"],["SERVO6","SERVO6"],["SERVO7","SERVO7"],["SERVO8","SERVO8"]],types:[["Entero","int"],["Decimal","float"],["Boolean","boolean"]]},ciaa:{description:"CIAA board"}};profile.default=profile.edu_ciaa,Blockly.CiaaSapi.init=function(workspace){Blockly.CiaaSapi.definitions_=Object.create(null),Blockly.CiaaSapi.definitions_["sapi-header-file"]='#include "sapi.h"',Blockly.CiaaSapi.setups_=Object.create(null),Blockly.CiaaSapi.variableDB_?Blockly.CiaaSapi.variableDB_.reset():Blockly.CiaaSapi.variableDB_=new Blockly.Names(Blockly.CiaaSapi.RESERVED_WORDS_);for(var defvars=[],variables=Blockly.Variables.allVariables(workspace),x=0;x<variables.length;x++)defvars[x]="int "+Blockly.CiaaSapi.variableDB_.getName(variables[x],Blockly.Variables.NAME_TYPE)+";\n";Blockly.CiaaSapi.definitions_.variables=defvars.join("\n")},Blockly.CiaaSapi.finish=function(code){code="  "+code.replace(/\n/g,"\n      ");var userCode=code.replace(/\n\s+$/,"\n");code="void main(void) \n{\n   // Board Initialization \n   boardConfig(); \n\n",code+="   // Enable tick counting every 1ms \n   tickConfig(1, 0); \n\n",code+="   // User generated setups \n   setup(); \n\n",code+="   while(1) {\n    "+userCode+"\n  }\n}";var imports=[],definitions=[];for(var name in Blockly.CiaaSapi.definitions_){var def=Blockly.CiaaSapi.definitions_[name];def.match(/^#include/)?imports.push(def):definitions.push(def)}var setups=[];for(var name in Blockly.CiaaSapi.setups_)setups.push(Blockly.CiaaSapi.setups_[name]);return(imports.join("\n")+"\n\n"+definitions.join("\n")+"\n inline void setup(void) \n{\n  "+setups.join("\n  ")+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+code},Blockly.CiaaSapi.scrubNakedValue=function(line){return line+";\n"},Blockly.CiaaSapi.quote_=function(string){return'"'+(string=string.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'"))+'"'},Blockly.CiaaSapi.scrub_=function(block,code){if(null===code)return"";var commentCode="";if(!block.outputConnection||!block.outputConnection.targetConnection){var comment=block.getCommentText();comment&&(commentCode+=Blockly.CiaaSapi.prefixLines(comment,"// ")+"\n");for(var x=0;x<block.inputList.length;x++)if(block.inputList[x].type==Blockly.INPUT_VALUE){var childBlock=block.inputList[x].connection.targetBlock();if(childBlock){var comment=Blockly.CiaaSapi.allNestedComments(childBlock);comment&&(commentCode+=Blockly.CiaaSapi.prefixLines(comment,"// "))}}}var nextBlock=block.nextConnection&&block.nextConnection.targetBlock();return commentCode+code+Blockly.CiaaSapi.blockToCode(nextBlock)},goog.provide("Blockly.CiaaSapi.base"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.ciaa_sapi_blocking_delay=function(){return"delay("+(Blockly.CiaaSapi.valueToCode(this,"delay_time",Blockly.CiaaSapi.ORDER_ATOMIC)||"2000")+");\n"},Blockly.CiaaSapi.ciaa_sapi_inaccurate_blocking_delay=function(block){return"delayInaccurate("+Blockly.CiaaSapi.valueToCode(block,"delay_ms",Blockly.CiaaSapi.ORDER_ATOMIC)+");\n"},Blockly.CiaaSapi.ciaa_sapi_gpio_write=function(block){var dropdown_pin_option=block.getFieldValue("pin_option"),dropdown_value_option=(Blockly.CiaaSapi.valueToCode(block,"pin",Blockly.CiaaSapi.ORDER_ATOMIC),block.getFieldValue("value_option"));Blockly.CiaaSapi.valueToCode(block,"value",Blockly.CiaaSapi.ORDER_ATOMIC);return Blockly.CiaaSapi.setups_["gpio-enable"]="gpioConfig(0, GPIO_ENABLE);",Blockly.CiaaSapi.setups_["gpio-config-output"+dropdown_pin_option]="gpioConfig("+dropdown_pin_option+", GPIO_OUTPUT);","gpioWrite("+dropdown_pin_option+", "+dropdown_value_option+");\n"},Blockly.CiaaSapi.ciaa_sapi_gpio_digital_read=function(block){var dropdown_pin_option=block.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["gpio-enable"]="gpioConfig(0, GPIO_ENABLE);",Blockly.CiaaSapi.setups_["gpio-config-input"+dropdown_pin_option]="gpioConfig("+dropdown_pin_option+", GPIO_INPUT);",["gpioRead("+dropdown_pin_option+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_gpio_analog_read=function(block){var dropdown_pin_option=block.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["adc-enable"]="adcConfig(ADC_ENABLE);",["adcRead("+dropdown_pin_option+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_dac_write=function(block){var dropdown_pin_option=block.getFieldValue("pin_option"),number_value=block.getFieldValue("value");return Blockly.CiaaSapi.setups_["dac-enable"]="dacConfig(DAC_ENABLE);","dacWrite("+dropdown_pin_option+", "+number_value+");\n"},Blockly.CiaaSapi.ciaa_sapi_sleep_until_interrupt=function(block){return"sleepUntilNextInterrupt();\n"},Blockly.CiaaSapi.ciaa_sapi_pwm_write=function(block){var dropdown_pin_option=block.getFieldValue("pin_option"),number_value_option=block.getFieldValue("value_option");return Blockly.CiaaSapi.setups_["pwm-enable"]="pwmConfig(0, PWM_ENABLE);",Blockly.CiaaSapi.setups_["pwm-"+dropdown_pin_option+"-enable"]="pwmConfig("+dropdown_pin_option+", PWM_ENABLE_OUTPUT);","pwmWrite("+dropdown_pin_option+", "+number_value_option+");"},Blockly.CiaaSapi.ciaa_sapi_pwm_read=function(block){var dropdown_pin_option=block.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["pwm-enable"]="pwmConfig(0, PWM_ENABLE);",Blockly.CiaaSapi.setups_["pwm-"+dropdown_pin_option+"-enable"]="pwmConfig("+dropdown_pin_option+", PWM_ENABLE_OUTPUT);",["pwmRead("+dropdown_pin_option+")",Blockly.CiaaSapi.ORDER_NONE]},goog.provide("Blockly.CiaaSapi.servo"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.ciaa_sapi_servo_read=function(block){var dropdown_pin_option=block.getFieldValue("pin_option");return Blockly.CiaaSapi.setups_["servo-enable"]="servoConfig(0, SERVO_ENABLE);",Blockly.CiaaSapi.setups_["servo-"+dropdown_pin_option+"-enable"]="servoConfig("+dropdown_pin_option+", SERVO_ENABLE_OUTPUT);",["servoRead("+dropdown_pin_option+")",Blockly.CiaaSapi.ORDER_NONE]},Blockly.CiaaSapi.ciaa_sapi_servo_write=function(block){var dropdown_pin_option=block.getFieldValue("pin_option"),angle_value_option=block.getFieldValue("value_option");return Blockly.CiaaSapi.setups_["servo-enable"]="servoConfig(0, SERVO_ENABLE);",Blockly.CiaaSapi.setups_["servo-"+dropdown_pin_option+"-enable"]="servoConfig("+dropdown_pin_option+", SERVO_ENABLE_OUTPUT);","servoWrite("+dropdown_pin_option+", "+angle_value_option+");\n"},goog.provide("Blockly.CiaaSapi.procedures"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.procedures_defreturn=function(){var funcName=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),branch=Blockly.CiaaSapi.statementToCode(this,"STACK");Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(branch=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+branch);var returnValue=Blockly.CiaaSapi.valueToCode(this,"RETURN",Blockly.CiaaSapi.ORDER_NONE)||"";returnValue&&(returnValue="  return "+returnValue+";\n");for(var returnType=returnValue?"int":"void",args=[],x=0;x<this.arguments_.length;x++)args[x]="int "+Blockly.CiaaSapi.variableDB_.getName(this.arguments_[x],Blockly.Variables.NAME_TYPE);var code=returnType+" "+funcName+"("+args.join(", ")+") {\n"+branch+returnValue+"}\n";return code=Blockly.CiaaSapi.scrub_(this,code),Blockly.CiaaSapi.definitions_[funcName]=code,null},Blockly.CiaaSapi.procedures_defnoreturn=Blockly.CiaaSapi.procedures_defreturn,Blockly.CiaaSapi.procedures_callreturn=function(){for(var funcName=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),args=[],x=0;x<this.arguments_.length;x++)args[x]=Blockly.CiaaSapi.valueToCode(this,"ARG"+x,Blockly.CiaaSapi.ORDER_NONE)||"null";return[funcName+"("+args.join(", ")+")",Blockly.CiaaSapi.ORDER_UNARY_POSTFIX]},Blockly.CiaaSapi.procedures_callnoreturn=function(){for(var funcName=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),args=[],x=0;x<this.arguments_.length;x++)args[x]=Blockly.CiaaSapi.valueToCode(this,"ARG"+x,Blockly.CiaaSapi.ORDER_NONE)||"null";return funcName+"("+args.join(", ")+");\n"},Blockly.CiaaSapi.procedures_ifreturn=function(){var condition=Blockly.CiaaSapi.valueToCode(this,"CONDITION",Blockly.CiaaSapi.ORDER_NONE)||"false",code="if ("+condition+") {\n";if(this.hasReturnValue_){code+="  return "+(Blockly.CiaaSapi.valueToCode(this,"VALUE",Blockly.CiaaSapi.ORDER_NONE)||"null")+";\n"}else code+="  return;\n";return code+="}\n"},goog.provide("Blockly.CiaaSapi.variables"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.variables_get=function(){return[Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.variables_declare=function(){var argument0=(this.getFieldValue("TYPE"),Blockly.CiaaSapi.valueToCode(this,"VALUE",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0"),varName=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return Blockly.CiaaSapi.setups_["setup_var"+varName]=varName+" = "+argument0+";\n",""},Blockly.CiaaSapi.variables_set=function(){var argument0=Blockly.CiaaSapi.valueToCode(this,"VALUE",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0";return Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+argument0+";\n"},goog.provide("Blockly.CiaaSapi.math"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.math_number=function(){var code=window.parseFloat(this.getFieldValue("NUM"));return[code,code<0?Blockly.CiaaSapi.ORDER_UNARY_PREFIX:Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.math_arithmetic=function(){var code,mode=this.getFieldValue("OP"),tuple=Blockly.CiaaSapi.math_arithmetic.OPERATORS[mode],operator=tuple[0],order=tuple[1],argument0=Blockly.CiaaSapi.valueToCode(this,"A",order)||"0",argument1=Blockly.CiaaSapi.valueToCode(this,"B",order)||"0";return operator?(code=argument0+operator+argument1,[code,order]):(code="Math.pow("+argument0+", "+argument1+")",[code,Blockly.CiaaSapi.ORDER_UNARY_POSTFIX])},Blockly.CiaaSapi.math_arithmetic.OPERATORS={ADD:[" + ",Blockly.CiaaSapi.ORDER_ADDITIVE],MINUS:[" - ",Blockly.CiaaSapi.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.CiaaSapi.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.CiaaSapi.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.CiaaSapi.ORDER_NONE]},goog.provide("Blockly.CiaaSapi.logic"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.controls_if=function(){var n=0,argument=Blockly.CiaaSapi.valueToCode(this,"IF"+n,Blockly.CiaaSapi.ORDER_NONE)||"false",branch=Blockly.CiaaSapi.statementToCode(this,"DO"+n),code="if ("+argument+") {\n"+branch+"\n}";for(n=1;n<=this.elseifCount_;n++)argument=Blockly.CiaaSapi.valueToCode(this,"IF"+n,Blockly.CiaaSapi.ORDER_NONE)||"false",branch=Blockly.CiaaSapi.statementToCode(this,"DO"+n),code+=" else if ("+argument+") {\n"+branch+"}";return this.elseCount_&&(branch=Blockly.CiaaSapi.statementToCode(this,"ELSE"),code+=" else {\n"+branch+"\n}"),code+"\n"},Blockly.CiaaSapi.logic_compare=function(){var mode=this.getFieldValue("OP"),operator=Blockly.CiaaSapi.logic_compare.OPERATORS[mode],order="=="==operator||"!="==operator?Blockly.CiaaSapi.ORDER_EQUALITY:Blockly.CiaaSapi.ORDER_RELATIONAL;return[(Blockly.CiaaSapi.valueToCode(this,"A",order)||"0")+" "+operator+" "+(Blockly.CiaaSapi.valueToCode(this,"B",order)||"0"),order]},Blockly.CiaaSapi.logic_compare.OPERATORS={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="},Blockly.CiaaSapi.logic_operation=function(){var operator="AND"==this.getFieldValue("OP")?"&&":"||",order="&&"==operator?Blockly.CiaaSapi.ORDER_LOGICAL_AND:Blockly.CiaaSapi.ORDER_LOGICAL_OR;return[(Blockly.CiaaSapi.valueToCode(this,"A",order)||"false")+" "+operator+" "+(Blockly.CiaaSapi.valueToCode(this,"B",order)||"false"),order]},Blockly.CiaaSapi.logic_negate=function(){var order=Blockly.CiaaSapi.ORDER_UNARY_PREFIX;return["!"+(Blockly.CiaaSapi.valueToCode(this,"BOOL",order)||"false"),order]},Blockly.CiaaSapi.logic_boolean=function(){return["TRUE"==this.getFieldValue("BOOL")?"true":"false",Blockly.CiaaSapi.ORDER_ATOMIC]},Blockly.CiaaSapi.logic_null=function(){return["NULL",Blockly.CiaaSapi.ORDER_ATOMIC]},goog.provide("Blockly.CiaaSapi.loops"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.controls_for=function(){var variable0=Blockly.CiaaSapi.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),argument0=Blockly.CiaaSapi.valueToCode(this,"FROM",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",argument1=Blockly.CiaaSapi.valueToCode(this,"TO",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",argument2=Blockly.CiaaSapi.valueToCode(this,"BY",Blockly.CiaaSapi.ORDER_ASSIGNMENT)||"0",branch=Blockly.CiaaSapi.statementToCode(this,"DO");Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(branch=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+branch);var code;if(argument0.match(/^-?\d+(\.\d+)?$/)&&argument1.match(/^-?\d+(\.\d+)?$/)){code="for ("+variable0+" = "+argument0+"; "+variable0+(parseFloat(argument0)<=parseFloat(argument1)?" <= ":" >= ")+argument1+"; "+variable0+(0==argument2?"++":"+="+argument2)+") {\n"+branch+"}\n"}else{code="";var startVar=argument0;if(!argument0.match(/^\w+$/)&&!argument0.match(/^-?\d+(\.\d+)?$/)){var startVar=Blockly.CiaaSapi.variableDB_.getDistinctName(variable0+"_start",Blockly.Variables.NAME_TYPE);code+="int "+startVar+" = "+argument0+";\n"}var endVar=argument1;if(!argument1.match(/^\w+$/)&&!argument1.match(/^-?\d+(\.\d+)?$/)){var endVar=Blockly.CiaaSapi.variableDB_.getDistinctName(variable0+"_end",Blockly.Variables.NAME_TYPE);code+="int "+endVar+" = "+argument1+";\n"}code+="for ("+variable0+" = "+startVar+";\n    ("+startVar+" <= "+endVar+") ? "+variable0+" <= "+endVar+" : "+variable0+" >= "+endVar+";\n    "+variable0+" += ("+startVar+" <= "+endVar+") ? 1 : -1) {\n"+branch+"}\n"}return code},Blockly.CiaaSapi.controls_whileUntil=function(){var until="UNTIL"==this.getFieldValue("MODE"),argument0=Blockly.CiaaSapi.valueToCode(this,"BOOL",until?Blockly.CiaaSapi.ORDER_LOGICAL_NOT:Blockly.CiaaSapi.ORDER_NONE)||"false",branch=Blockly.CiaaSapi.statementToCode(this,"DO");return Blockly.CiaaSapi.INFINITE_LOOP_TRAP&&(branch=Blockly.CiaaSapi.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+branch),until&&(argument0="!"+argument0),"while ("+argument0+") {\n"+branch+"}\n"},goog.provide("Blockly.CiaaSapi.texts"),goog.require("Blockly.CiaaSapi"),Blockly.CiaaSapi.text=function(){return[Blockly.CiaaSapi.quote_(this.getFieldValue("TEXT")),Blockly.CiaaSapi.ORDER_ATOMIC]};