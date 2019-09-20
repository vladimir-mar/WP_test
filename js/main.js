$(document).ready(function(){
	$('#accordion').accordion();
	premiumData.startLoad();
	$('body').on('click', '#next-button-js', function(){
		premiumData.tabsCompile();
		$('#tabs').tabs({
			active: 0
		});
	});
	$('body').on('click', '#back-button-js', function(){
		premiumData.startLoad();
	});
	$('body').on('click', '#to-send-button-js', function(){
		premiumData.subscriptionCompile();
	});
});
let premiumData = {
	startLoad: function(){
		this.parametersCompile();
	},
	parametersCompile: function(){
		let tplReadyTags = this.loadTemplate('parameters_tpl');
		$('#main-container_js').html(tplReadyTags);
	},
	tabsCompile: function(){
		let tplReadyTags = this.loadTemplate('tabs_tpl');
		$('#main-container_js').html(tplReadyTags);
	},
	subscriptionCompile: function(){
		let tplReadyTags = this.loadTemplate('subscription-page_tpl');
		$('#main-container_js').html(tplReadyTags);
	},
	loadTemplate: function(idTemplate){
		let template = Handlebars.compile($('#'+idTemplate).html());
		return template();
	}
}