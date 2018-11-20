// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).ready(function () {
  // ----- Dropdown
  $('#dropdown').hover(function () {
      $('#dropdown-content', this).stop().slideDown('medium');
    },
    function () {
      $('#dropdown-content', this).stop().slideUp('medium');
    });
  // ----- Dropdown [END]
  // ----- Modals
  $(".open").click(function () {
    $(".overlay, #modal").addClass("active");
    $('#tabs > li').next().hide();
    $('#tabs > li:last').next().show();
  });

  $(".close, .overlay").click(function () {
    $(".overlay, #modal").removeClass("active");
  });
  // ----- Modals [END]
})
