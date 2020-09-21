(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),o=(a(21),a(3)),l=a.n(o),c=a(14),m=a(7),u=a(8),d=a(9),p=a(10),h=a(15),f=a(13),v=a(1),b=a.n(v),y=a(11),g=a.n(y),E=a(2),x=a.n(E),N=a(12),S=a.n(N),C=a(4),_=a.n(C),w=(a(23),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=parseInt(e.target.value);n.setState(Object(u.a)({},t,a))},n.calculateCompoundInterest=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,r,i,s,o,m,u,d,p,h,f,v,b,y,g,E,x,N,S;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),a=[],r=[],i=[],s=[],o=n.state.initalInvestment,m=n.state.initalInvestment,u=n.state.initalInvestment,d=n.state.interestRateVariance,p=n.state.interestPercentage/100,h=(n.state.interestPercentage+d)/100,f=(n.state.interestPercentage-d)/100,v=n.state.timeInYears*n.state.compoundFrequency,b=n.state.monthlyContribution,y=12*b,a.push(o),r.push(m),i.push(u),s.push(o),g=0;g<v;g++)1===n.state.compoundFrequency?(o=o+o*p+12*b,0!==n.state.interestRateVariance&&(m=m+m*h+12*b,u=u+u*f+12*b)):2===n.state.compoundFrequency?(o=o+o*(p/2)+6*b,0!==n.state.interestRateVariance&&(m=m+m*(h/2)+6*b,u=u+u*(f/2)+6*b)):12===n.state.compoundFrequency?(o=o+o*(p/12)+1*b,0!==n.state.interestRateVariance&&(m=m+m*(h/12)+1*b,u=u+u*(f/12)+1*b)):365===n.state.compoundFrequency&&(o=o+o*(p/365)+b/(365/12),0!==n.state.interestRateVariance&&(m=m+m*(h/365)+b/(365/12),u=u+u*(f/365)+b/(365/12))),a.push(parseFloat(o.toFixed(2))),0!==n.state.interestRateVariance&&(r.push(parseFloat(m.toFixed(2))),i.push(parseFloat(u.toFixed(2)))),s.push(s[g]+y);for(E=[],x=[],N=[],S=0;S<=v;S+=n.state.compoundFrequency)E.push(a[S]),0!==n.state.interestRateVariance&&(x.push(r[S]),N.push(i[S]));return e.next=26,n.setState({futureValueSeries:[].concat(E),varianceAboveSeries:[].concat(x),varianceBelowSeries:[].concat(N),ContributionSeries:Object(c.a)(s.slice(0,n.state.timeInYears+1)),graphComplete:!0});case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.resetCalculator=function(e){n.setState({initalInvestment:0,monthlyContribution:0,timeInYears:0,interestPercentage:0,interestRateVariance:0,compoundFrequency:1,futureValueSeries:[],varianceAboveSeries:[],varianceBelowSeries:[],ContributionSeries:[],graphComplete:!1})},n.toggleTable=function(e){if(!1===n.state.showTable){if(e){var t=e.length,a=e[0].data.length,r='<div class="highcharts-data-table">';r+='<table id="highcharts-data-table-0" summary="Table representation of chart.">',r+='<caption class="highcharts-table-caption">Total Savings in US Dollars</caption>',r+="<thead><tr>",r+='<th scope="col" class="text">Years</th>';for(var i=0;i<t;i++){r+='<th scope="col" class="'+("Future Value"===e[i].name||"Total Savings Compounded"===e[i].name?"text highlighted-value":"text")+'" >'+e[i].name+"</th>"}r+="</thead></tr>",r+="<tbody>";for(var s=0;s<a;s++){r+="<tr>",r+='<td scope="row" class="text">Year '+s+"</td>";for(var o=0;o<t;o++){r+='<td class="'+("Future Value"===e[o].name||"Total Savings Compounded"===e[o].name?"number highlighted-value":"number")+'" >$'+e[o].data[s].toLocaleString("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2})+"</td>"}r+="</tr>"}r+="</tbody>",r+="</table>",r+="</div>",_()("#calculator_results_table").append(r)}}else _()("#calculator_results_table").empty();n.setState((function(e){return{showTable:!e.showTable}}))},n.state={initalInvestment:0,monthlyContribution:0,timeInYears:0,interestPercentage:0,interestRateVariance:0,compoundFrequency:1,futureValueSeries:[],varianceAboveSeries:[],varianceBelowSeries:[],ContributionSeries:[],graphComplete:!1,showTable:!1},n}return Object(p.a)(a,[{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){var e=this;x()(b.a),S()(b.a),b.a.setOptions({lang:{decimalPoint:".",thousandsSep:","}});var t=this.state,a=t.interestPercentage,n=t.interestRateVariance,i=t.futureValueSeries,s=t.varianceAboveSeries,o=t.varianceBelowSeries,l=t.ContributionSeries,c=[{name:"Variance Above (".concat(a+n,".00%)"),data:s,color:"#00325b"},{name:"Future Value (".concat(a,".00%)"),data:i,color:"#bf280d"},{name:"Variance Below (".concat(a-n,".00%)"),data:o,color:"#269092"}],m=[{name:"Future Value (".concat(a,".00%)"),data:i,color:"#bf280d"},{name:"Total Contributions",data:l,color:"#269092"}],u=[],d={title:{text:"Total Savings"},credits:{text:"ILoveMakingMoney.com",href:"https://ilovemakingmoney.com/"},tooltip:{shared:!0,valuePrefix:"$",valueDecimals:2,thousandsSep:",",headerFormat:"Year {point.key}<br/>"},yAxis:{title:{text:"US Dollar($)"},labels:{format:"${value:,.0f}"},tickInterval:1e3},xAxis:{labels:{formatter:function(){return"Year "+this.value}},title:{text:"Number of Years",style:{visibility:"hidden"}}},series:u=0!==n?c:m,navigation:{menuStyle:{background:"#E0E0E0",color:"black"},menuItemHoverStyle:{color:"white"}},exporting:{enabled:!0}};return r.a.createElement("div",{className:"block block-sec-calculator block-sec-calculator-blocksec-compound-calculator block-title-sec-compound-interest-calculator"},r.a.createElement("form",{onSubmit:this.calculateCompoundInterest.bind(this)},r.a.createElement("div",{id:"compound-interest-calc-wrapper"},r.a.createElement("p",{className:"form-required"},r.a.createElement("strong",null,r.a.createElement("span",null,"*")," DENOTES A REQUIRED FIELD")),r.a.createElement("div",{className:"sec-calculator",id:"compound-interest-calc"},r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{id:"calculator_wrapper",className:"calculator_wrapper js-form-wrapper form-wrapper"},r.a.createElement("div",{className:"calculator_step"},r.a.createElement("h3",null,"Step 1: Initial Investment"),r.a.createElement("div",{className:"calculator__form-input"},r.a.createElement("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-principal form-item-principal"},r.a.createElement("label",{htmlFor:"edit-principal",className:"js-form-required form-required"},"Initial Investment"),r.a.createElement("input",{className:"monetary-input num-input form-text required",type:"text",name:"initalInvestment",size:"10",maxLength:"128",required:!0,onChange:this.myChangeHandler}),r.a.createElement("div",{id:"edit-principal--description",className:"description"},"Amount of money that you have available to invest initially.")))),r.a.createElement("div",{className:"calculator_step"},r.a.createElement("h3",null,"Step 2: Contribute"),r.a.createElement("div",{className:"calculator__form-input"},r.a.createElement("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-addition form-item-addition"},r.a.createElement("label",{htmlFor:"edit-addition"},"Monthly Contribution"),r.a.createElement("input",{className:"monetary-input neg-input form-text",type:"text",name:"monthlyContribution",size:"10",maxLength:"128",onChange:this.myChangeHandler}),r.a.createElement("div",{id:"edit-addition--description",className:"description"},"Amount that you plan to add to the principal every month, or a negative number for the amount that you plan to withdraw every month."))),r.a.createElement("div",{className:"calculator__form-input"},r.a.createElement("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-num-years form-item-num-years"},r.a.createElement("label",{htmlFor:"edit-num-years",className:"js-form-required form-required"},"Length of Time in Years"),r.a.createElement("input",{className:"num-years num-input form-text required",type:"text",name:"timeInYears",size:"10",maxLength:"128",required:!0,onChange:this.myChangeHandler}),r.a.createElement("div",{id:"edit-num-years--description",className:"description"},"Length of time, in years, that you plan to save.")))),r.a.createElement("div",{className:"calculator_step"},r.a.createElement("h3",null,"Step 3: Interest Rate"),r.a.createElement("div",{className:"calculator__form-input"},r.a.createElement("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-interest-rate form-item-interest-rate"},r.a.createElement("label",{htmlFor:"edit-interest-rate",className:"js-form-required form-required"},"Estimated Interest Rate"),r.a.createElement("input",{className:"interest-rate ir-input num-input form-text required",type:"text",name:"interestPercentage",size:"10",maxLength:"128",required:!0,onChange:this.myChangeHandler}),r.a.createElement("div",{id:"edit-interest-rate--description",className:"description"},"Your estimated annual interest rate."))),r.a.createElement("div",{className:"calculator__form-input"},r.a.createElement("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-interest-rate-variance form-item-interest-rate-variance"},r.a.createElement("label",{htmlFor:"edit-interest-rate-variance"},"Interest rate variance range"),r.a.createElement("input",{className:"interest-rate ir-input num-input form-text",type:"text",name:"interestRateVariance",size:"10",maxLength:"128",onChange:this.myChangeHandler}),r.a.createElement("div",{id:"edit-interest-rate-variance--description",className:"description"},"Range of interest rates (above and below the rate set above) that you desire to see results for.")))),r.a.createElement("div",{className:"calculator_step"},r.a.createElement("h3",null,"Step 4: Compound It"),r.a.createElement("div",{className:"calculator__form-input"},r.a.createElement("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-compound-interest form-item-compound-interest"},r.a.createElement("label",{htmlFor:"edit-compound-interest"},"Compound Frequency"),r.a.createElement("select",{className:"compound-interest form-select",value:this.state.compoundFrequency,onChange:this.myChangeHandler,name:"compoundFrequency"},r.a.createElement("option",{value:"1"},"Annually"),r.a.createElement("option",{value:"2"},"Semiannually"),r.a.createElement("option",{value:"12"},"Monthly"),r.a.createElement("option",{value:"365"},"Daily")),r.a.createElement("div",{id:"edit-compound-interest--description",className:"description"},"Times per year that interest will be compounded.")))),r.a.createElement("div",{id:"compound-calc__buttons",className:"buttons"},r.a.createElement("div",{id:"edit-actions"},r.a.createElement("input",{className:"submit button",type:"submit",value:"Calculate"}),r.a.createElement("input",{type:"reset",onClick:this.resetCalculator,id:"edit-reset",name:"op",value:"Reset",className:"button button--reset js-form-submit form-submit"}))),!1===this.state.graphComplete?null:r.a.createElement("div",{id:"results_container",className:"results-container ajax-changed",tabIndex:"-1"},r.a.createElement("div",{className:"results-container__inner"},r.a.createElement("h2",null,"The Results Are In"),r.a.createElement("h3",{className:"calculator__results-amount"},"In ",r.a.createElement("span",{className:"amount"},this.state.timeInYears)," years, you will have ",r.a.createElement("span",{className:"amount"},"$",this.numberWithCommas(this.state.futureValueSeries[this.state.timeInYears])))),r.a.createElement("div",{className:"highChart"},r.a.createElement(g.a,{highcharts:b.a,options:d})),r.a.createElement("button",{onClick:function(){return e.toggleTable(u)},id:"toggle_table"},this.state.showTable?"Hide Table":"Show Table"),r.a.createElement("div",{id:"calculator_results_table",className:"results_container__table",width:"400"}))))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=document.querySelector("#my-box-page");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5e1c6ea7.chunk.js.map