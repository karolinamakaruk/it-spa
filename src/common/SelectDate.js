export function datapicker() {

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

  global.numberDays = 7;
  global.startDay = tomorrow.toISOString().split("T")[0];
  global.endDay = nextWeek.toISOString().split("T")[0];

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
        startDay = start.format("YYYY-MM-DD");
        endDay = end.format("YYYY-MM-DD");
      }
    );
  });

  return datapicker;
}
