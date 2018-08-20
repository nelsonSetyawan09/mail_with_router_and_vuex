import Important from './components/article/Important.vue';
import Inbox from './components/article/Inbox.vue';
import Sent from './components/article/Sent.vue';
import Trash from './components/article/Trash.vue';
import Messages from './components/article/Messages.vue';
import Message from './components/article/Message.vue';
import MessagesImportant from './components/article/MessagesImportant.vue';
import MessageImportant from './components/article/MessageImportant.vue';
import MessagesSent from './components/article/MessagesSent.vue';
import MessageSent from './components/article/MessageSent.vue';
import MessagesTrash from './components/article/MessagesTrash.vue';
import MessageTrash from './components/article/MessageTrash.vue';
import ContentSidebar from './components/ContentSidebar.vue'




export const routes =[
    {path:'', component:ContentSidebar},
    {path:'/inbox', component:Inbox, children:[
        {path:'', component:Messages, name:'msgs'},
        {path:':id', component:Message, name:'msg'}
    ]},
    {path:'/important', component:Important,children:[
        {path:'', component:MessagesImportant, name:'msgsImportant'},
        {path:':id', component:MessageImportant, name:'msgImportant'}
    ]},
    {path:'/sent', component:Sent, children:[
        {path:'', component:MessagesSent, name:'msgsSent'},
        {path:':id', component:MessageSent, name:'msgSent'}
    ]},
    {path:'/trash', component:Trash, children:[
        {path:'', component:MessagesTrash, name:'msgsTrash'},
        {path:':id', component:MessageTrash, name:'msgTrash'}
    ]},

]
