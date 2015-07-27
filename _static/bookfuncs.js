/**
 * Created by IntelliJ IDEA.
 * User: bmiller
 * Date: 4/20/11
 * Time: 2:01 PM
 * To change this template use File | Settings | File Templates.
 */

/*
 Copyright (C) 2011  Brad Miller  bonelake@gmail.com

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */

//
// Logging functions
//
/*

function logBookEvent(eventInfo) {
    eventInfo.course = eBookConfig.course;
    if (eBookConfig.logLevel > 0) {
        jQuery.get(eBookConfig.ajaxURL + 'hsblog', eventInfo); // Log the run event
    }
}

function logRunEvent(eventInfo) {
    eventInfo.course = eBookConfig.course;
    if (eBookConfig.logLevel > 0) {
        jQuery.post(eBookConfig.ajaxURL + 'runlog', eventInfo); // Log the run event
    }
}


//
// Grading functions
//

function comment(blockid) {
    $.modal('<iframe width="600" height="400" src="/getcomment?id=' + blockid + '" style="background-color: white">', {
        //$.modal('<form><textarea name="content"></textarea><input type="submit" name="submit" > </form>', {
        overlayClose: true,
        closeHTML: "",
        containerCss: {
            width: 600,
            height: 400,
            backgroundColor: "#fff"
        }
    });
}

function sendGrade(grade, sid, acid, id) {
    var data = {'sid': sid, 'acid': acid, 'grade': grade, 'id': id};
    jQuery.get(eBookConfig.ajaxURL + 'savegrade', data);
}

function sendComment(comment, sid, acid, id) {
    var data = {'sid': sid, 'acid': acid, 'comment': comment, 'id': id};
    jQuery.get(eBookConfig.ajaxURL + 'savegrade', data);
}

//
// User login and page decoration functions
//


function gotUser(data, status, whatever) {
    var mess = '';
    var caughtErr = false;
    var d;
    try {
        d = eval(data)[0];
    } catch (err) {
        if (eBookConfig.loginRequired) {
            if (confirm("Error: " + err.toString() + "Please report this error!  Click OK to continue without logging in.  Cancel to retry.")) {
                caughtErr = true;
                mess = "Not logged in";
                disableAcOpt();
                $('li.loginout').html('<a href="' + eBookConfig.app + '/default/user/login">Login</a>')
            } else {
                window.location.href = eBookConfig.app + '/default/user/login?_next=' + window.location.href
            }
        }
    }
    if (d.redirect) {
        if (eBookConfig.loginRequired) {
            window.location.href = eBookConfig.app + '/default/user/login?_next=' + window.location.href
        } else {
            mess = "Not logged in";
            disableAcOpt();
            $('li.loginout').html('<a href="' + eBookConfig.app + '/default/user/login">Login</a>')
        }
    } else {
        if (!caughtErr) {
            mess = d.email;
            eBookConfig.isLoggedIn = true;
            eBookConfig.cohortId = d.cohortId;
            addNavbarLoginLink(); // will change navbar login link to say 'Log Out'
            enableUserHighlights();
            timedRefresh();
        }
    }
    $(".loggedinuser").html(mess);
    logBookEvent({
        'event': 'page',
        'act': 'view',
        'div_id': window.location.pathname
    })
}


function timedRefresh() {
    timeoutPeriod = 4500000;  // 75 minutes
    $(document).bind("idle.idleTimer", function () {
        // After timeout period send the user back to the index.  This will force a login
        // if needed when they want to go to a particular page.  This may not be perfect
        // but its an easy way to make sure laptop users are properly logged in when they
        // take quizzes and save stuff.
        if (location.href.indexOf('index.html') < 0) {
            location.href = eBookConfig.app + '/static/' + eBookConfig.course + '/index.html'
        }
    });
    $.idleTimer(timeoutPeriod);
}

function shouldLogin() {
    var sli = true;

    if (window.location.href.indexOf('file://') > -1 || (! eBookConfig.useRunestoneServices) ) {
        sli = false;
    }

    return sli;
}

function isLoggedIn() {
    if (typeof eBookConfig.isLoggedIn !== undefined) {
        return eBookConfig.isLoggedIn;
    }
    return false;
}

function addUserToFooter() {
    // test to see if online before doing this.
    var x = "user ";
    if (shouldLogin()) {
        jQuery.get(eBookConfig.ajaxURL + 'getuser', null, gotUser)
    } else {
        $(".footer").html(x + 'not logged in');
        disableAcOpt();
        logBookEvent({'event': 'page', 'act': 'view', 'div_id': window.location.pathname})
    }
}

function addNavbarLoginLink() {
    if (isLoggedIn()) {
        if (eBookConfig.cohortId == null || eBookConfig.cohortId == "") {
            $('#joinGroupLink').show();
            $('#groupScheduleLink').hide();
            $('#newChapterLink').hide();
            $('#manageGroupLink').hide();
        } else {
            $('#joinGroupLink').hide();
            $('#groupScheduleLink').show();
            $('#newChapterLink').show();
            $('#manageGroupLink').show();
        }
        $('#profilelink').show();
        $('#passwordlink').show();
        $('#registerlink').hide();
        $('li.loginout').html('<a href="' + eBookConfig.app + '/default/user/logout">Log Out</a>')
    } else {
        $('#registerlink').show();
        $('#profilelink').hide();
        $('#passwordlink').hide();
        $('li.loginout').html('<a href="' + eBookConfig.app + '/default/user/login">Login</a>')
    }
}


function getNumUsers() {
    if (eBookConfig.useRunestoneServices) {
        $.getJSON(eBookConfig.ajaxURL + 'getnumusers', setNumUsers)
    }
}

function getOnlineUsers() {
    if (eBookConfig.useRunestoneServices) {
        $.getJSON(eBookConfig.ajaxURL + 'getnumonline', setOnlineUsers)
    }
}

function setOnlineUsers(data) {
    var d = data[0];
    $("#numuserspan").text(d.online);
}

function setNumUsers(data) {
    var d = data[0];
    $("#totalusers").html(d.numusers);
}


//
// Nice interface for localstore  -- Thanks acbart
//
//

var storage = {
    set: function (directive, value) {
        localStorage.setItem(directive + "_value", value);
        localStorage.setItem(directive + "_timestamp", $.now());
    },
    remove: function (directive) {
        localStorage.removeItem(directive + "_value");
        localStorage.removeItem(directive + "_timestamp");
    },
    get: function (directive) {
        return localStorage.getItem(directive + "_value");
    },
    has: function (directive) {
        return localStorage.getItem(directive + "_value") !== null;
    },
    // Tests whether the server has the newer version
    is_new: function (directive, server_time) {
        var stored_time = localStorage.getItem(directive + "_timestamp");
        return (server_time >= stored_time + 5000);
    },
};

//
// delay function used by VT to autosave some component data
//

var timers = {};
function addDelay(directive, action, delay) {
    if (delay === undefined) {
        delay = 400;
    }
    clearTimeout(timers[directive]);
    timers[directive] = setTimeout(action, delay);
}



// initialize stuff
$(document).ready(addUserToFooter);
$(document).ready(addNavbarLoginLink);
$(document).ready(getNumUsers);
$(document).ready(getOnlineUsers);

*/

// misc stuff
// todo:  This could be further distributed but making a video.js file just for one function seems dumb.
$(document).ready(function() {
  // add the video play button overlay image
  $(".video-play-overlay").each(function() {
    $(this).css('background-image', "url(\'{{pathto('_static/play_overlay_icon.png', 1)}}\')")
    });

  // This function is needed to allow the dropdown search bar to work;
  // The default behaviour is that the dropdown menu closes when something in
  // it (like the search bar) is clicked
  $(function() {
    // Fix input element click problem
    $('.dropdown input, .dropdown label').click(function(e) {
      e.stopPropagation();
      });
  });
});