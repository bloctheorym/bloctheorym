<template>
  <div><!-- mobile nav -->
                 <div class="header"> </div>
                 <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                 <label for="openSidebarMenu" class="sidebarIconToggle">
                   <div class="spinner diagonal part-1"></div>
                   <div class="spinner horizontal"></div>
                   <div class="spinner diagonal part-2"></div>
                 </label>
                 <div id="sidebarMenu">
                   <ul class="sidebarMenuInner">
                     <li> <n-link to="/"><img src="../assets/images/bloctheorym-logo6.png"></n-link></li>
                     <li><n-link to="about" target="_blank">ABOUT</n-link></li>
                     <li><n-link to="our-work" target="_blank">OUR WORK</n-link></li>
                     <li><n-link to="pricing" class="has-text-white">PRICING</n-link></li>
                     <li><n-link to="contact" class="has-text-white">CONTACT</n-link></li>
                     
                     <li><n-link class="button is-small has-text-weight-bold is-black" to="pricing" style="background-color: #6063d4;">Learn More</n-link></li>
                   </ul>
                 </div> 
                <!-- ./end mobile nav -->
 

       <!-- .hero-head -->
       <div class="hero-head">
        <div class="columns is-mobile is-marginless heading has-text-weight-bold">
            <div class="column left">
                <figure class="navbar-item-logo image is-marginless">
                    <n-link to="index"><img src="../assets/images/bloctheorym-logo-blk.png"></n-link>
                </figure>
            </div>
            <div class="column center desktop">
                <p class="navbar-item has-text-black"><n-link to="about" class="has-text-black">ABOUT</n-link> </p>
                <p class="navbar-item has-text-black"><n-link to="our-work" class="has-text-black">OUR WORK</n-link> </p>
                <p class="navbar-item has-text-black"><n-link to="pricing" class="has-text-black">PRICING</n-link> </p>
                <p class="navbar-item has-text-black hide">RESOURCES</p>
                <p class="navbar-item has-text-black hide">DEMO  </p>
            </div>
            <div class="column right"> 
                <p class="navbar-item has-text-black desktop"><n-link to="log-in" class="has-text-black">LOG IN</n-link>     </p>
                <p class="navbar-item has-text-black desktop"><n-link class="button is-small has-text-weight-bold is-black" to="pricing" style="background-color: #6063d4;">Learn More</n-link></p>  
                <figure class="navbar-item image has-text-white center hide">
                        <i class="fas fa-bars" style="width: 1rem; height: 1rem;"></i>
                </figure>
            </div>
        </div>
    </div>
    <!-- /.hero-head -->
        
    
            <!-- .hero-body -->
            
        
            <!-- /.hero -->
          	<!-- .section -->
		<section class="section">
                <div class="container is-fluid">
                    <div class="columns p-t-xl center"> 
                        <div class="column">
                            <article> 
                                <div class="media-content has-text-black" style="max-width: 800px; margin: 0 auto">
                                         
                                        <div class="mid-page-block">
                                                <font size="-1">(Last updated 17:00 PDT October 14 2013)</font>
                                                <br><br>
                                                
                                                <b>What information do we collect?</b><br>
                                                When you join BlocTheorym, we ask for some information that will identify you to us as
                                                a user. This information includes your name, email address, eBay username and
                                                eBay password. We require your eBay username and password in order to place bids
                                                on your behalf. Without these, BlocTheorym could not place a bid on eBay for you.
                                                We may also ask you to supply a handful of demographic statistics. This is for
                                                aggregate purposes only. It is not stored with your other information, and can
                                                not ever be associated with you or your account - even by BlocTheorym.<p>
                                                We also collect statistical data about the bids being placed by the BlocTheorym
                                                servers. This information is also aggregrate, and is not associated with
                                                you or your account.        
                                                
                                                <br><br>
                                                
                                                
                                                <b>What do you do with this information?</b><br>
                                                
                                                BlocTheorym <b>never</b> supplies your personal information to any third party for advertising or promotional purposes. If you owe money to BlocTheorym and we're unable to collect it, we may need to give your contact information to a third party for collection purposes. We will
                                                occasionally use your email address to send you information regarding BlocTheorym and
                                                the services we provide. Your eBay username and password are stored in our database, and can only
                                                be changed by you once you have logged into the system. Your username and
                                                password are transmitted to eBay when BlocTheorym places a bid on your behalf.</p><p>
                                                The information we collect about bids is summarized, and we provide basic
                                                information to our advertisers on the general product categories our
                                                members are interested in.
                                                </p>
                                                
                                                
                                                <b>Is my information secure?</b><br>
                                                
                                                Your personal information is protected by your password. Never share this
                                                password with anyone. BlocTheorym will never contact you unsolicited to ask
                                                for your password. We have taken steps to ensure our databases are secure,
                                                and are confident in our ability to keep your information safe. 
                                                <p></p>
                                                
                                                
                                                <b>What about cookies?</b><br>
                                                
                                                BlocTheorym stores a cookie on your computer to track you while you are on
                                                the site.  The information in this cookie is a string of characters
                                                that is meaningless to everyone and everything except our server. No
                                                personal information or bid information is stored in the cookie.
                                                The information in the cookie can not be used by third parties to gain access to your account information.
                                                <p>
                                                
                                                
                                                <b>Still have questions?</b><br>
                                                We realize everyone has a different view on privacy. We take your
                                                privacy very seriously. If you still have concerns, or are unclear
                                                about any aspect of our privacy policy, please <n-link to="contact">contact us</n-link>, and
                                                we will be happy to discuss the matter with you.
                                                </p><p>
                                                </p></div>
                                </div>
                            </article>
                        </div>
                  
                    </div>
                </div>
            </section> 
</div>
</template>