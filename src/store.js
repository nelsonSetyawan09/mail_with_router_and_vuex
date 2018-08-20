import Vue from 'vue';
import Vuex from 'vuex';
import messages from './data/messages'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        messages:[]
    },
    getters:{
        inbox(state){
            return state.messages.filter(message =>{
                return message.type == 'inbox';
            });
        },
        important(state){
            return state.messages.filter(message =>{
                return message.type == 'important';
            });
        },
        sent(state){
            return state.messages.filter(message =>{
                return message.type == 'sent';
            });
        },
        trash(state){
            return state.messages.filter(message =>{
                return message.type == 'trash';
            });
        }
    },
    mutations:{
        'SET_MESSAGES'(state, messages){
            state.messages = messages;
        }
    },
    actions:{
        'initMessages'({commit}){
            commit('SET_MESSAGES', messages);
            // console.log(messages);
        }
    }
})
