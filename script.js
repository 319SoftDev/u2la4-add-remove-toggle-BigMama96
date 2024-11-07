

const heading = document.querySelector("#heading");

const changeFontColor = () => {
    heading.classList.toggle("blue-text");
}

heading.addEventListener("click", changeFontColor);

const subheading = document.querySelector("#subheading");

const changeFontColors = () => {
    subheading.classList.toggle("blue-text");
}

subheading.addEventListener("click", changeFontColors);
//
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");
const openReplyMessage = () => {
    replyMessage.classList.remove("hidden");
}
replyButton.addEventListener("click", openReplyMessage);

// send and cancel buttons 
    const sendButton= document.querySelector
("#send-button");
    const cancelButton= document.querySelector
("#cancel-button");
    const closeReplyMessage=() => {
    replyMessage.classList.add("hidden");
}

sendButton.addEventListener("click",
    closeReplyMessage);
    cancelButton.addEventListener("click",
        closeReplyMessage);
    



const openButton = document.getElementById('open-button');
const inbox = document.getElementById('inbox');
const inboxMessage = document.getElementById('inbox-message');
const closeButton = document.getElementById('close');
const markButton = document.getElementById('mark-button');




openButton.addEventListener('click', function() {
  inbox.classList.add('is-read');
inboxMessage.classList.remove('hidden');
    
 markButton.classList.remove('hidden');
});


closeButton.addEventListener('click', function() {
   inboxMessage.classList.add('hidden');
});

openButton.addEventListener('click', function() {
 inbox.classList.add('is-read');
    
   inboxMessage.classList.remove('hidden');
    
    markButton.classList.remove('hidden');
});


closeButton.addEventListener('click', function() {
    inboxMessage.classList.add('hidden');
});
