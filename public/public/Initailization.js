const configuration = props=>{
		branding: [{"name" : "SkillPill" }],
		title: "Qualities",
		category: "Baselines",
		icon: "./skillpill.png",
		url: "https://ix61k6qun9.execute-api.ap-southeast-1.amazonaws.com/prod/lifetoolsdataset",
		levelDetails: [{count:12 ,rule: "minimum" }, 
					   /*{count:8, rule: "exact"},
					   {count:6, rule: "exact"},*/
					   {count:4, rule: "exact"}]
    }
    
    $("#favlogo").attr('href',configuration.icon);
    $("#logo").attr('src',configuration.icon);
