var jsPsychHtmlKeyboardResponse=function(e){"use strict";function t(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s={name:"html-keyboard-response",parameters:{stimulus:{type:e.ParameterType.HTML_STRING,pretty_name:"Stimulus",default:void 0},choices:{type:e.ParameterType.KEYS,pretty_name:"Choices",default:"ALL_KEYS"},prompt:{type:e.ParameterType.HTML_STRING,pretty_name:"Prompt",default:null},stimulus_duration:{type:e.ParameterType.INT,pretty_name:"Stimulus duration",default:null},trial_duration:{type:e.ParameterType.INT,pretty_name:"Trial duration",default:null},response_ends_trial:{type:e.ParameterType.BOOL,pretty_name:"Response ends trial",default:!0}}},i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.jsPsych=t}var s,i,a;return s=e,i=[{key:"trial",value:function(e,t){var s=this,i='<div id="jspsych-html-keyboard-response-stimulus">'+t.stimulus+"</div>";null!==t.prompt&&(i+=t.prompt),e.innerHTML=i;var a={rt:null,key:null},n=function(){s.jsPsych.pluginAPI.clearAllTimeouts(),void 0!==r&&s.jsPsych.pluginAPI.cancelKeyboardResponse(r);var i={rt:a.rt,stimulus:t.stimulus,response:a.key};e.innerHTML="",s.jsPsych.finishTrial(i)};if("NO_KEYS"!=t.choices)var r=this.jsPsych.pluginAPI.getKeyboardResponse({callback_function:function(s){e.querySelector("#jspsych-html-keyboard-response-stimulus").className+=" responded",null==a.key&&(a=s),t.response_ends_trial&&n()},valid_responses:t.choices,rt_method:"performance",persist:!1,allow_held_key:!1});null!==t.stimulus_duration&&this.jsPsych.pluginAPI.setTimeout((function(){e.querySelector("#jspsych-html-keyboard-response-stimulus").style.visibility="hidden"}),t.stimulus_duration),null!==t.trial_duration&&this.jsPsych.pluginAPI.setTimeout(n,t.trial_duration)}},{key:"simulate",value:function(e,t,s,i){"data-only"==t&&(i(),this.simulate_data_only(e,s)),"visual"==t&&this.simulate_visual(e,s,i)}},{key:"create_simulation_data",value:function(e,t){var s={stimulus:e.stimulus,rt:this.jsPsych.randomization.sampleExGaussian(500,50,1/150,!0),response:this.jsPsych.pluginAPI.getValidKey(e.choices)},i=this.jsPsych.pluginAPI.mergeSimulationData(s,t);return this.jsPsych.pluginAPI.ensureSimulationDataConsistency(e,i),i}},{key:"simulate_data_only",value:function(e,t){var s=this.create_simulation_data(e,t);this.jsPsych.finishTrial(s)}},{key:"simulate_visual",value:function(e,t,s){var i=this.create_simulation_data(e,t),a=this.jsPsych.getDisplayElement();this.trial(a,e),s(),null!==i.rt&&this.jsPsych.pluginAPI.pressKey(i.response,i.rt)}}],i&&t(s.prototype,i),a&&t(s,a),Object.defineProperty(s,"prototype",{writable:!1}),e}();return i.info=s,i}(jsPsychModule);
//# sourceMappingURL=index.browser.min.js.map
