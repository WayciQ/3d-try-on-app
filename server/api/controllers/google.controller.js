const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '504663910107-6d862u6i5odqag4vonvqgjb948n1qgo3.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI='https://developers.google.com/oauthplayground';

const REFRESH_TOKEN ='1//04_E8L4tYzpRlCgYIARAAGAQSNwF-L9IrF8hjHRwykDVD26QpHK3DntyzgXrGuuWwAyEgIlxo_Iy0cAiCwp8sVRxTy8cSbOX5Z6g';


const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version:'v3',
    auth: oauth2Client
})
const filePath = path.join(__dirname, 'TryOn.controller.js');

async function uploadFile() {
    try{
        const response = await drive.files.create({
            requestBody:{
                name:'test',
                mimeType: 'application/octet-stream'
            },
            media: {
                mimeType:'application/octet-stream',
                body: fs.createReadStream(filePath)
            }
        })
    }
    catch(e){
        console.log(e)
    }
}

async function deleteFile() {
    try{
        const res = await drive.files.delete({
            fileId:"asdas"
        })
        console.log(res);
    } catch (e){
        console.log(e)
    }
}  

async function generatePublicUrn() {
    try{

        const fileId = "123213";
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role:'reader',
                type:'anyone',
            }
        })

        const res = await drive.files.get({
            fileId: fileId,
            fileds:'webViewLink,webContentLink'
        })
        console.log(res.data)
    } catch (e) {
        console.log(e)
    }
}