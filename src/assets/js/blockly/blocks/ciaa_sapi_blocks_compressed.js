"use strict";goog.provide("Blockly.Blocks.base"),goog.require("Blockly.Blocks"),Blockly.Blocks.ciaa_sapi_blocking_delay={init:function(){this.appendValueInput("delay_time").setCheck("Number").appendField("Esperar ticks"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(230),this.setTooltip("Retardo bloqueante"),this.setHelpUrl("")}},Blockly.Blocks.ciaa_sapi_inaccurate_blocking_delay={init:function(){this.appendValueInput("delay_ms").setCheck("Number").appendField("Esperar milisegundos"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(230),this.setTooltip("Retardo aproximado bloqueante"),this.setHelpUrl("")}},Blockly.Blocks.ciaa_sapi_gpio_write={init:function(){this.appendDummyInput().appendField("Escribir Salida Digital."),this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Pin").appendField(new Blockly.FieldDropdown(profile.default.leds.concat(profile.default.digital)),"pin_option"),this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Valor").appendField(new Blockly.FieldDropdown([["On","ON"],["Off","OFF"]]),"value_option"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(135),this.setTooltip("Escribe una salida digital"),this.setHelpUrl("")}},Blockly.Blocks.ciaa_sapi_gpio_digital_read={init:function(){this.appendDummyInput().appendField("Leer Entrada Digital."),this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Pin").appendField(new Blockly.FieldDropdown(profile.default.digital.concat(profile.default.buttons)),"pin_option"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setColour(135),this.setTooltip("Lee una entrada digital"),this.setHelpUrl("")}},Blockly.Blocks.ciaa_sapi_gpio_analog_read={init:function(){this.appendDummyInput().appendField("Leer Entrada Analógica."),this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Pin").appendField(new Blockly.FieldDropdown(profile.default.adc),"pin_option"),this.setInputsInline(!0),this.setOutput(!0,"Number"),this.setColour(135),this.setTooltip("Lee una entrada analógica"),this.setHelpUrl("")}},Blockly.Blocks.ciaa_sapi_dac_write={init:function(){this.appendDummyInput().appendField("Escribir Salida Analógica."),this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Pin").appendField(new Blockly.FieldDropdown(profile.default.dac),"pin_option"),this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Valor").appendField(new Blockly.FieldNumber(0,0,65535),"value"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(135),this.setTooltip("Escribe una salida analógica"),this.setHelpUrl("")}},Blockly.Blocks.ciaa_sapi_sleep_until_interrupt={init:function(){this.appendDummyInput().appendField("Dormir hasta la próxima interrupción"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(230),this.setTooltip("Modo sleep"),this.setHelpUrl("")}},goog.provide("Blockly.Blocks.math"),goog.require("Blockly.Blocks"),Blockly.Blocks.math.HUE=230,Blockly.Blocks.math_number={init:function(){this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.appendDummyInput().appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.numberValidator),"NUM"),this.setOutput(!0,"Number"),this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)}},Blockly.Blocks.math_arithmetic={init:function(){var OPERATORS=[[Blockly.Msg.MATH_ADDITION_SYMBOL,"ADD"],[Blockly.Msg.MATH_SUBTRACTION_SYMBOL,"MINUS"],[Blockly.Msg.MATH_MULTIPLICATION_SYMBOL,"MULTIPLY"],[Blockly.Msg.MATH_DIVISION_SYMBOL,"DIVIDE"],[Blockly.Msg.MATH_POWER_SYMBOL,"POWER"]];this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number"),this.appendValueInput("A").setCheck("Number"),this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS),"OP"),this.setInputsInline(!0);var thisBlock=this;this.setTooltip(function(){var mode=thisBlock.getFieldValue("OP");return{ADD:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,MINUS:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,MULTIPLY:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,DIVIDE:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,POWER:Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER}[mode]})}},Blockly.Blocks.math_single={init:function(){var OPERATORS=[[Blockly.Msg.MATH_SINGLE_OP_ROOT,"ROOT"],[Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE,"ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]];this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number"),this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS),"OP");var thisBlock=this;this.setTooltip(function(){var mode=thisBlock.getFieldValue("OP");return{ROOT:Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,ABS:Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,NEG:Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,LN:Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,LOG10:Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,EXP:Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,POW10:Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10}[mode]})}},Blockly.Blocks.math_trig={init:function(){var OPERATORS=[[Blockly.Msg.MATH_TRIG_SIN,"SIN"],[Blockly.Msg.MATH_TRIG_COS,"COS"],[Blockly.Msg.MATH_TRIG_TAN,"TAN"],[Blockly.Msg.MATH_TRIG_ASIN,"ASIN"],[Blockly.Msg.MATH_TRIG_ACOS,"ACOS"],[Blockly.Msg.MATH_TRIG_ATAN,"ATAN"]];this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number"),this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS),"OP");var thisBlock=this;this.setTooltip(function(){var mode=thisBlock.getFieldValue("OP");return{SIN:Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,COS:Blockly.Msg.MATH_TRIG_TOOLTIP_COS,TAN:Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,ASIN:Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,ACOS:Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,ATAN:Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN}[mode]})}},Blockly.Blocks.math_constant={init:function(){var CONSTANTS=[["π","PI"],["e","E"],["φ","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(½)","SQRT1_2"],["∞","INFINITY"]];this.setHelpUrl(Blockly.Msg.MATH_CONSTANT_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number"),this.appendDummyInput().appendField(new Blockly.FieldDropdown(CONSTANTS),"CONSTANT"),this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)}},Blockly.Blocks.math_number_property={init:function(){var PROPERTIES=[[Blockly.Msg.MATH_IS_EVEN,"EVEN"],[Blockly.Msg.MATH_IS_ODD,"ODD"],[Blockly.Msg.MATH_IS_PRIME,"PRIME"],[Blockly.Msg.MATH_IS_WHOLE,"WHOLE"],[Blockly.Msg.MATH_IS_POSITIVE,"POSITIVE"],[Blockly.Msg.MATH_IS_NEGATIVE,"NEGATIVE"],[Blockly.Msg.MATH_IS_DIVISIBLE_BY,"DIVISIBLE_BY"]];this.setColour(Blockly.Blocks.math.HUE),this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");var dropdown=new Blockly.FieldDropdown(PROPERTIES,function(option){var divisorInput="DIVISIBLE_BY"==option;this.sourceBlock_.updateShape_(divisorInput)});this.appendDummyInput().appendField(dropdown,"PROPERTY"),this.setInputsInline(!0),this.setOutput(!0,"Boolean"),this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)},mutationToDom:function(){var container=document.createElement("mutation"),divisorInput="DIVISIBLE_BY"==this.getFieldValue("PROPERTY");return container.setAttribute("divisor_input",divisorInput),container},domToMutation:function(xmlElement){var divisorInput="true"==xmlElement.getAttribute("divisor_input");this.updateShape_(divisorInput)},updateShape_:function(divisorInput){var inputExists=this.getInput("DIVISOR");divisorInput?inputExists||this.appendValueInput("DIVISOR").setCheck("Number"):inputExists&&this.removeInput("DIVISOR")}},Blockly.Blocks.math_change={init:function(){this.jsonInit({message0:Blockly.Msg.MATH_CHANGE_TITLE,args0:[{type:"field_variable",name:"VAR",variable:Blockly.Msg.MATH_CHANGE_TITLE_ITEM},{type:"input_value",name:"DELTA",check:"Number"}],previousStatement:null,nextStatement:null,colour:Blockly.Blocks.math.HUE,helpUrl:Blockly.Msg.MATH_CHANGE_HELPURL});var thisBlock=this;this.setTooltip(function(){return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace("%1",thisBlock.getFieldValue("VAR"))})},getVars:function(){return[this.getFieldValue("VAR")]},renameVar:function(oldName,newName){Blockly.Names.equals(oldName,this.getFieldValue("VAR"))&&this.setFieldValue(newName,"VAR")}},Blockly.Blocks.math_round={init:function(){var OPERATORS=[[Blockly.Msg.MATH_ROUND_OPERATOR_ROUND,"ROUND"],[Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP,"ROUNDUP"],[Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN,"ROUNDDOWN"]];this.setHelpUrl(Blockly.Msg.MATH_ROUND_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number"),this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS),"OP"),this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)}},Blockly.Blocks.math_on_list={init:function(){var OPERATORS=[[Blockly.Msg.MATH_ONLIST_OPERATOR_SUM,"SUM"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MIN,"MIN"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MAX,"MAX"],[Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE,"AVERAGE"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN,"MEDIAN"],[Blockly.Msg.MATH_ONLIST_OPERATOR_MODE,"MODE"],[Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV,"STD_DEV"],[Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM,"RANDOM"]],thisBlock=this;this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number");var dropdown=new Blockly.FieldDropdown(OPERATORS,function(newOp){"MODE"==newOp?thisBlock.outputConnection.setCheck("Array"):thisBlock.outputConnection.setCheck("Number")});this.appendValueInput("LIST").setCheck("Array").appendField(dropdown,"OP"),this.setTooltip(function(){var mode=thisBlock.getFieldValue("OP");return{SUM:Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,MIN:Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,MAX:Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,AVERAGE:Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,MEDIAN:Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,MODE:Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,STD_DEV:Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,RANDOM:Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM}[mode]})}},Blockly.Blocks.math_modulo={init:function(){this.jsonInit({message0:Blockly.Msg.MATH_MODULO_TITLE,args0:[{type:"input_value",name:"DIVIDEND",check:"Number"},{type:"input_value",name:"DIVISOR",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Blocks.math.HUE,tooltip:Blockly.Msg.MATH_MODULO_TOOLTIP,helpUrl:Blockly.Msg.MATH_MODULO_HELPURL})}},Blockly.Blocks.math_constrain={init:function(){this.jsonInit({message0:Blockly.Msg.MATH_CONSTRAIN_TITLE,args0:[{type:"input_value",name:"VALUE",check:"Number"},{type:"input_value",name:"LOW",check:"Number"},{type:"input_value",name:"HIGH",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Blocks.math.HUE,tooltip:Blockly.Msg.MATH_CONSTRAIN_TOOLTIP,helpUrl:Blockly.Msg.MATH_CONSTRAIN_HELPURL})}},Blockly.Blocks.math_random_int={init:function(){this.jsonInit({message0:Blockly.Msg.MATH_RANDOM_INT_TITLE,args0:[{type:"input_value",name:"FROM",check:"Number"},{type:"input_value",name:"TO",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Blocks.math.HUE,tooltip:Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,helpUrl:Blockly.Msg.MATH_RANDOM_INT_HELPURL})}},Blockly.Blocks.math_random_float={init:function(){this.setHelpUrl(Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL),this.setColour(Blockly.Blocks.math.HUE),this.setOutput(!0,"Number"),this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM),this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)}},goog.provide("Blockly.Blocks.logic"),goog.require("Blockly.Blocks"),Blockly.Blocks.logic.HUE=210,Blockly.Blocks.controls_if={init:function(){this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL),this.setColour(Blockly.Blocks.logic.HUE),this.appendValueInput("IF0").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF),this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setMutator(new Blockly.Mutator(["controls_if_elseif","controls_if_else"]));var thisBlock=this;this.setTooltip(function(){return thisBlock.elseifCount_||thisBlock.elseCount_?!thisBlock.elseifCount_&&thisBlock.elseCount_?Blockly.Msg.CONTROLS_IF_TOOLTIP_2:thisBlock.elseifCount_&&!thisBlock.elseCount_?Blockly.Msg.CONTROLS_IF_TOOLTIP_3:thisBlock.elseifCount_&&thisBlock.elseCount_?Blockly.Msg.CONTROLS_IF_TOOLTIP_4:"":Blockly.Msg.CONTROLS_IF_TOOLTIP_1}),this.elseifCount_=0,this.elseCount_=0},mutationToDom:function(){if(!this.elseifCount_&&!this.elseCount_)return null;var container=document.createElement("mutation");return this.elseifCount_&&container.setAttribute("elseif",this.elseifCount_),this.elseCount_&&container.setAttribute("else",1),container},domToMutation:function(xmlElement){this.elseifCount_=parseInt(xmlElement.getAttribute("elseif"),10)||0,this.elseCount_=parseInt(xmlElement.getAttribute("else"),10)||0;for(var i=1;i<=this.elseifCount_;i++)this.appendValueInput("IF"+i).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),this.appendStatementInput("DO"+i).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);this.elseCount_&&this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)},decompose:function(workspace){var containerBlock=Blockly.Block.obtain(workspace,"controls_if_if");containerBlock.initSvg();for(var connection=containerBlock.getInput("STACK").connection,i=1;i<=this.elseifCount_;i++){var elseifBlock=Blockly.Block.obtain(workspace,"controls_if_elseif");elseifBlock.initSvg(),connection.connect(elseifBlock.previousConnection),connection=elseifBlock.nextConnection}if(this.elseCount_){var elseBlock=Blockly.Block.obtain(workspace,"controls_if_else");elseBlock.initSvg(),connection.connect(elseBlock.previousConnection)}return containerBlock},compose:function(containerBlock){this.elseCount_&&this.removeInput("ELSE"),this.elseCount_=0;for(var i=this.elseifCount_;i>0;i--)this.removeInput("IF"+i),this.removeInput("DO"+i);this.elseifCount_=0;for(var clauseBlock=containerBlock.getInputTargetBlock("STACK");clauseBlock;){switch(clauseBlock.type){case"controls_if_elseif":this.elseifCount_++;var ifInput=this.appendValueInput("IF"+this.elseifCount_).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),doInput=this.appendStatementInput("DO"+this.elseifCount_);doInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN),clauseBlock.valueConnection_&&ifInput.connection.connect(clauseBlock.valueConnection_),clauseBlock.statementConnection_&&doInput.connection.connect(clauseBlock.statementConnection_);break;case"controls_if_else":this.elseCount_++;var elseInput=this.appendStatementInput("ELSE");elseInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE),clauseBlock.statementConnection_&&elseInput.connection.connect(clauseBlock.statementConnection_);break;default:throw"Unknown block type."}clauseBlock=clauseBlock.nextConnection&&clauseBlock.nextConnection.targetBlock()}},saveConnections:function(containerBlock){for(var clauseBlock=containerBlock.getInputTargetBlock("STACK"),i=1;clauseBlock;){switch(clauseBlock.type){case"controls_if_elseif":var inputIf=this.getInput("IF"+i),inputDo=this.getInput("DO"+i);clauseBlock.valueConnection_=inputIf&&inputIf.connection.targetConnection,clauseBlock.statementConnection_=inputDo&&inputDo.connection.targetConnection,i++;break;case"controls_if_else":var inputDo=this.getInput("ELSE");clauseBlock.statementConnection_=inputDo&&inputDo.connection.targetConnection;break;default:throw"Unknown block type."}clauseBlock=clauseBlock.nextConnection&&clauseBlock.nextConnection.targetBlock()}}},Blockly.Blocks.controls_if_if={init:function(){this.setColour(Blockly.Blocks.logic.HUE),this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF),this.appendStatementInput("STACK"),this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP),this.contextMenu=!1}},Blockly.Blocks.controls_if_elseif={init:function(){this.setColour(Blockly.Blocks.logic.HUE),this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP),this.contextMenu=!1}},Blockly.Blocks.controls_if_else={init:function(){this.setColour(Blockly.Blocks.logic.HUE),this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE),this.setPreviousStatement(!0),this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP),this.contextMenu=!1}},Blockly.Blocks.logic_compare={init:function(){var OPERATORS=this.RTL?[["=","EQ"],["≠","NEQ"],[">","LT"],["≥","LTE"],["<","GT"],["≤","GTE"]]:[["=","EQ"],["≠","NEQ"],["<","LT"],["≤","LTE"],[">","GT"],["≥","GTE"]];this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL),this.setColour(Blockly.Blocks.logic.HUE),this.setOutput(!0,"Boolean"),this.appendValueInput("A"),this.appendValueInput("B").appendField(new Blockly.FieldDropdown(OPERATORS),"OP"),this.setInputsInline(!0);var thisBlock=this;this.setTooltip(function(){var op=thisBlock.getFieldValue("OP");return{EQ:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,NEQ:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,LT:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,LTE:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,GT:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,GTE:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE}[op]}),this.prevBlocks_=[null,null]},onchange:function(){var blockA=this.getInputTargetBlock("A"),blockB=this.getInputTargetBlock("B");if(blockA&&blockB&&!blockA.outputConnection.checkType_(blockB.outputConnection))for(var i=0;i<this.prevBlocks_.length;i++){var block=this.prevBlocks_[i];block!==blockA&&block!==blockB||(block.setParent(null),block.bumpNeighbours_())}this.prevBlocks_[0]=blockA,this.prevBlocks_[1]=blockB}},Blockly.Blocks.logic_operation={init:function(){var OPERATORS=[[Blockly.Msg.LOGIC_OPERATION_AND,"AND"],[Blockly.Msg.LOGIC_OPERATION_OR,"OR"]];this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL),this.setColour(Blockly.Blocks.logic.HUE),this.setOutput(!0,"Boolean"),this.appendValueInput("A").setCheck("Boolean"),this.appendValueInput("B").setCheck("Boolean").appendField(new Blockly.FieldDropdown(OPERATORS),"OP"),this.setInputsInline(!0);var thisBlock=this;this.setTooltip(function(){var op=thisBlock.getFieldValue("OP");return{AND:Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,OR:Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR}[op]})}},Blockly.Blocks.logic_negate={init:function(){this.jsonInit({message0:Blockly.Msg.LOGIC_NEGATE_TITLE,args0:[{type:"input_value",name:"BOOL",check:"Boolean"}],output:"Boolean",colour:Blockly.Blocks.logic.HUE,tooltip:Blockly.Msg.LOGIC_NEGATE_TOOLTIP,helpUrl:Blockly.Msg.LOGIC_NEGATE_HELPURL})}},Blockly.Blocks.logic_boolean={init:function(){var BOOLEANS=[[Blockly.Msg.LOGIC_BOOLEAN_TRUE,"TRUE"],[Blockly.Msg.LOGIC_BOOLEAN_FALSE,"FALSE"]];this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL),this.setColour(Blockly.Blocks.logic.HUE),this.setOutput(!0,"Boolean"),this.appendDummyInput().appendField(new Blockly.FieldDropdown(BOOLEANS),"BOOL"),this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)}},Blockly.Blocks.logic_null={init:function(){this.setHelpUrl(Blockly.Msg.LOGIC_NULL_HELPURL),this.setColour(Blockly.Blocks.logic.HUE),this.setOutput(!0),this.appendDummyInput().appendField(Blockly.Msg.LOGIC_NULL),this.setTooltip(Blockly.Msg.LOGIC_NULL_TOOLTIP)}},Blockly.Blocks.logic_ternary={init:function(){this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL),this.setColour(Blockly.Blocks.logic.HUE),this.appendValueInput("IF").setCheck("Boolean").appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION),this.appendValueInput("THEN").appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE),this.appendValueInput("ELSE").appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE),this.setOutput(!0),this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP),this.prevParentConnection_=null},onchange:function(){var blockA=this.getInputTargetBlock("THEN"),blockB=this.getInputTargetBlock("ELSE"),parentConnection=this.outputConnection.targetConnection;if((blockA||blockB)&&parentConnection)for(var i=0;i<2;i++){var block=1==i?blockA:blockB;block&&!block.outputConnection.checkType_(parentConnection)&&(parentConnection===this.prevParentConnection_?(this.setParent(null),parentConnection.sourceBlock_.bumpNeighbours_()):(block.setParent(null),block.bumpNeighbours_()))}this.prevParentConnection_=parentConnection}};