<!DOCTYPE html>
<html>
  <head>
    <title>Календарь</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      body {
      font-family: Arial;
      }
      table {
      width: 100%;
      }
      table tr:first-child td {
      background: #fff;
      }
      td {
      height: 36px;
      line-height: 36px;
      text-align: center;
      padding: 0;
      border-spacing: 0;
      background: #ededed;
      cursor: pointer;
      }
      td.selected {
      color: #fff;
      background: #07c;
      }
      .bui-calendar__month {
      text-align: center;
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5em;
      }
      .bui-calendar__control {
      top: 0;
      position: absolute;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      opacity: .4;
      padding: 0;
      background: 0;
      border: 0;
      }
      .bui-calendar__control--next {
      right: 0
      }
      .bui-calendar__control:hover,.bui-calendar__control:focus {
      opacity: .8
      }
      .bui-calendar__main {
      position: relative;
      } 
      .bui-calendar__control--prev {
      left: 0
      }
      .buttonCustom {
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: calc( -43.8px / 2);
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
      display: inline-block;
      font-weight: 400;
      color: #fff;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      box-shadow: 0 0 0 0.2rem rgba(0, 119, 204, .5);
      background: #07c;
      } 
      .cell-calendar {
      margin: 0 auto;
      max-width: 900px;
      }
    </style>
    <link rel="shortcut icon" href="favicon.png" type="image/png">
  </head>
  <body>
    <div class="cell-calendar">
      <span id="month" style="display: none;">1</span> 
      <div class="bui-calendar__main">
        <div class="bui-calendar__control bui-calendar__control--prev" data-bui-ref="calendar-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </div>
        <div class="bui-calendar__month">&nbsp;</div>
        <div class="bui-calendar__control bui-calendar__control--next" data-bui-ref="calendar-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </div>
      </div>
      <div id="container"></div>
      <button type="button" class="buttonCustom">10</button>
    </div>
    <script type="text/javascript" src="js/scenario.js"></script>
  </body>
</html>