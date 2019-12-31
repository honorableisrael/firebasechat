<template>
  <div class="home">
 <div class="container">
    <h3 class=" text-center">Messaging</h3>
        <div class="messaging">
        <div class="inbox_msg">
            <div class="inbox_people">
            <div class="headind_srch">
                <div class="recent_heading">
                <h4>Recent</h4>
                </div>
                <div class="srch_bar">
                <div class="stylish-input-group">
                    <input type="text" class="search-bar"  placeholder="Search" >
                    <span class="input-group-addon">
                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                    </span> </div>
                </div>
            </div>
            <div class="inbox_chat">
                <div class="chat_list active_chat">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
                <div class="chat_list">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
                <div class="chat_list">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
                <div class="chat_list">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
                <div class="chat_list">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
                <div class="chat_list">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
                <div class="chat_list">
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                    <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions 
                        astrology under one roof.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="mesgs">
            <div class="msg_history">
                <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                </div>
                </div>
                <div v-for="msg in messages"  class="outgoing_msg">
                <div class="sent_msg">
                    <p>{{msg.message}}</p>
                    <span class="time_date"> 11:01 AM    |    Today</span> </div>
                </div>
               </div>
            <div class="type_msg">
                <div class="input_msg_write">
                <input v-model="message"  type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn" v-on:click="saveToDB()" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
        </div>     
      <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '../main';
export default {

name: 'Home',
  components: {
   },
  data() {
    return{
        message : null,
        messages : [],
        createdAt: new Date(),
    };
  },
  created() {
    this.fetchMessages();
  },
  methods: {
    saveToDB() {
    // save to firestore
       db.collection('chat').add({
           message: this.message,
       })
       .then((docRef) => {
         console.log(docRef.data);
       })
       .catch((error) => {
         console.log(error);
       });
    },
    fetchMessages() {
      db.collection('chat').orderBy('createdAt').get()
      .then((querySnapshot) => {
          const allMessages = [];
          querySnapshot.forEach((doc) => {
              allMessages.push(doc.data());
              console.log(allMessages);
            });
          this.messages = allMessages;
      });
    },
  },
};
</script>
