function myDemo (contact,summary,skills,widgetsRequiredID,widgetContainerId){
	this.contact = $('#'+contact);
	this.summary = $('#'+summary);
	this.skills = $('#'+skills);
	this.widgetsRequired = $('#'+widgetsRequiredID);
	this.widgetContainer = $('#'+widgetContainerId);
}
myDemo.prototype.createContact = function(contact){
	let elementToInsert = `
		<h2>${contact.name} </h2>
		<p>${contact.address}</p>
		<p>${contact.city}, ${contact.province} ${contact.postalCode}</p> 
		<p>Phone: ${contact.phone} </p>
		<p>Personal website: ${contact["personal website"]}</p>
		<p>e-mail: ${contact["e-mail"]} </p>
	`;
	this.contact.append(elementToInsert);

}
myDemo.prototype.createSummary = function(summary){
	let elementToInsert = `<ul>`;
	this.summary.append(elementToInsert);
	summary.forEach(item=>{
		elementToInsert = `<li>${item}</li>`;
		this.summary.append(elementToInsert);
	});
	elementToInsert = `</ul>`;
	this.summary.append(elementToInsert);
	
}
myDemo.prototype.createSkills = function(skills){
	let elementToInsert = `<ul>`;
	this.skills.append(elementToInsert);
	skills.forEach(item=>{
		elementToInsert = `<li>${item}</li>`;
		this.skills.append(elementToInsert);
	});
	elementToInsert = `</ul>`;
	this.skills.append(elementToInsert);


}
myDemo.prototype.createEmployment = function(employment){
	let elementToInsert = `
				<div class="employment-container">
					<div>
						<div class="employment-inner-box">
							<div class="employment-left">
								<img src='${ employment.imgUrl }'>
							</div>
							<div class="employment-right">
								<p class="company">${ employment.company}</p>
								<p class="period">${ employment.period }</p>
								<p class="location">${ employment.location }</p>
								<div class="detail">
									<div class="title">${ employment.detail.title }</div>
									<ul>
`							
this.widgetContainer.append(elementToInsert);
employment.detail.responsibilitie.forEach(detail=>{
	elementToInsert = this.createDetail(detail);
	this.widgetContainer.append(elementToInsert);
});								
elementToInsert = `
					</ul>
								 </div>
											
							</div>    
						</div>
						<div class="line">
							<svg height="5" width="300">
								<line x1="0" y1="0" x2="300" y2="0" style="stroke:#ccc;stroke-width:2" />
								Sorry, your browser does not support inline SVG.
							</svg>
					
						</div>

					</div>
				</div>		
		`;
		this.widgetContainer.append(elementToInsert);
}
myDemo.prototype.createDetail = function(detail){
	return '<li>'+detail+'</li>';
}
myDemo.prototype.create = function(){
	this.createContact(resume.myContact);
	this.createSummary(resume.summary);
	this.createSkills(resume.skills);
	resume.employments.forEach(employment=>this.createEmployment(employment));
}
const myDemo1 = new myDemo('contact','summary','skills','widget-needed','widget-container');
myDemo1.create();