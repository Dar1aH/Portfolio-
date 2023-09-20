// To apply this you have to install cypress file upload package 

import 'cypress-file-upload'

describe('File Uploads', (()=>{

it.skip('Single File Upload', ()=>{

cy.visit('https://the-internet.herokuapp.com/upload');
cy.get('#file-upload').attachFile('file1.pdf') // this method will identify the file from the fixtures folder only, so you have to upload files to the fixtures folder 
cy.get('#file-submit').click();
cy.wait(5000);
cy.get('.example > h3').should('have.text', 'File Uploaded!');

})

it.skip('File Upload - Rename', ()=>{

cy.visit('https://the-internet.herokuapp.com/upload');
cy.get('#file-upload').attachFile({filePath:'file1.pdf', fileName:'myfile1.pdf'}); // renaming the uploaded file 
cy.get('#file-submit').click();
cy.wait(5000);
cy.get('.example > h3').should('have.text', 'File Uploaded!');

    
})

it.skip('File Upload - Drag and drop', ()=>{

cy.visit('https://the-internet.herokuapp.com/upload');

cy.get('#drag-drop-upload').attachFile('file1.pdf', {subjectType:'drag-n-drop'});

cy.get('#drag-drop-upload>.dz-preview> .dz-details > .dz-filename > span').contains("file1.pdf");
})

it('Multiple files Upload', ()=>{

cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
cy.get('#filesToUpload').attachFile(['file1.pdf','file2.jpg']);
cy.wait(5000);
cy.get(':nth-child(6)>strong').should('contain.text', 'Files You Selected');
    
})

it.only('File upload - Shadow Dom', ()=>{  // files that are in the sub dom (document object model)

cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');    
cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('file1.pdf'); // it finds the element inside of the shadow dom
cy.wait(5000);

// {includeShadowDom:true} has to be added to files that are in shadow doms 

cy.get('.smart-item-name',{includeShadowDom:true}).contains('file1.pdf'); 

})

}))