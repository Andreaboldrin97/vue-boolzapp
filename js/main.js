const app = new Vue(
    {
        el :'#root',
        data : {
            activeIndex : 0,
            substringtime : '',
            newMessage : '',
            //parametro preso per metterlo in lowercase
            searchName : '',
            //creata per cambiare la classe sul problema del dropdown menu 
            dropChat : '',
            currentDate : '',
            contacts: [
                    {
                        name: 'Michele',
                        avatar: '_1',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Sofia boolean',
                        avatar: '_2',
                        visible: true,
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Riccardo boolean',
                        avatar: '_3',
                        visible: true,
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Stefano boolean',
                        avatar: '_4',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: '_5',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: '_6',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: '_7',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: '_8',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                            }
                        ],
                    }
            ],
    
        },
        methods : {
            //! funzione per indicare al clik la chat
            currentIndex : function(indexElement){
                console.log(indexElement)
                this.dropChat = 'd-none';
                return this.activeIndex = indexElement
                
            },
            //! funzione per prendere solo ora e secondi
            substringTiming : function(element){
                element = element.slice(11,16);
              return element
            },
            //! funzioni per le img
            getFullPachIMg : function(indexElement){
                return `./img/avatar${this.contacts[indexElement].avatar}.jpg`
            },
            //! funzione per inviare il messaggio ricevuto da l'user e pusharlo nell'array messagges
            sendMessage : function(text , indexElement){
                if(text !== ''){
                    this.contacts[indexElement].messages.push(
                        {
                            date : this.currentDate ,
                            message : text ,
                            status : 'sent'
                        });
                           //! funzione di risposta dell'user con arrayFunction per la funzionalità del this
                setTimeout(()=>{
                    this.contacts[indexElement].messages.push(
                        {
                            date : this.currentDate ,
                            message : 'ok' ,
                            status : 'received'
                        })
                } , 1500)
                }
                    //*variabile di azzeramento
             this.newMessage = '';     
            },
       
            //! funzione per la ricerca del nome
            searchCurrentName : function(searchText){
                this.searchName = this.searchName.toLowerCase();
                
               for(let i = 0 ; i < this.contacts.length ; i++){
                   if(this.contacts[i].name.toLowerCase().includes(searchText)){
                    this.contacts[i].visible = true
                   }else{
                    this.contacts[i].visible = false
                   }
               }
            },
            //! funzione per vedere l'ultimo messagge
            visualLastMessage : function(indexElement){
                let messages = this.contacts[indexElement].messages;
                if(messages.length > 0){
                    const lastMessage = (this.contacts[indexElement].messages.length) - 1;
                return this.contacts[indexElement].messages[lastMessage].message
                }  
            },
            //! funzione per vedere l'ultima data del messagge
            visualLastDateMessage : function(indexElement){
                let messages = this.contacts[indexElement].messages;
                if( messages.length > 0){
                    const lastMessage = (this.contacts[indexElement].messages.length) - 1;
                    return this.contacts[indexElement].messages[lastMessage].date.slice(11,16)
                }
           },
           //! funzione cancellazzione messagge
            deleteMessage : function(indexElement , currentIndex){
                    this.contacts[indexElement].messages.splice(currentIndex , 1);
           },
           //! viene mostrato un alert con ora e data del messaggio (click su "INFO MESSAGGIO" --> dropdown)
            showInfoMessage: function (messageIndex , indexElement) {
            let singleArrayMessage = this.contacts[indexElement].messages;
            let infoMessage = singleArrayMessage[messageIndex].date;
            alert(`Info messaggio: ${infoMessage}`)
        },
           //! funzione per azzarare il dropdown sul click di una nuova chat
            visualDropChat : function(){
              this.dropChat = '';
            },
            //! funzione per la data corrente per l'invio dell messagge dell'user
            dateCurrent : function(){
                this.currentDate = moment().format('MM/DD/YY   hh:mm:ss ');
                return this.currentDate.slice(11,16);
            },
            //! funzione per vedere l'ultimo accesso dell'userchat
            lastAccess : function (indexElement){
                let messages = this.contacts[indexElement].messages;
                if(messages.length > 0){
                    const received = this.contacts[indexElement].messages.filter((element)=>{
                        if(element.status == 'received'){
                            return true
                        }else{
                            return false
                        }
                    })
                    console.log(received)
                    if(received.length > 0 ){
                        return received[received.length-1].date
                    }else{
                        lastMessage = moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
                        .format('hh:mm');
                        return lastMessage
                    }
                    
                }
            }

        },
        //? funzione per chiamare la dateCurrent nella window
        created (){
            this.dateCurrent();
        }
       
        
        
})