import { src } from "../common/import_src";

//src("https://cdn.jsdelivr.net/jquery/latest/jquery.min.js")
export function datapicker() {
  //   src("https://cdn.jsdelivr.net/momentjs/latest/moment.min.js");
  //   src("https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js");
  //   var st = document.createElement("style");
  //   st.rel = "stylesheet";
  //   st.href = "https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css";

  //   document.getElementsByTagName("head")[0].appendChild(st);

  //const datapicker = document.createElement("datapicker");

  const datapicker = document.createElement("input");
  datapicker.type = "text";
  datapicker.name = "daterange";
 
  datapicker.classList.add("datapicker");

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let nextWeek = new Date();
  nextWeek.setDate(tomorrow.getDate() + 8);
  let nextYear = new Date();
  nextYear.setDate(tomorrow.getDate() + 365);

  global.numberDays = undefined;

  jQuery(function () {
    jQuery('input[name="daterange"]').daterangepicker(
      {
        startDate: tomorrow,
        endDate: nextWeek,
        minDate: tomorrow,
        maxDate: nextYear,
        opens: "right",
      },
      function (start, end, label) {
        numberDays =
          (new Date(end.format("YYYY-MM-DD")) -
            new Date(start.format("YYYY-MM-DD"))) /
          1000 /
          60 /
          60 /
          24;
        console.log(numberDays);
        console.log(
          "A new date selection was made: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD")
        );
      }
    );
  });

  return datapicker;
}
