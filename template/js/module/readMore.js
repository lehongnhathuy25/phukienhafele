export default function Readmore() {
  // $(document).ready(function () {
  //   let ele = $(".widget-origin .form-group");
  //   let countLimit = 5;
  //   let isExpanded = false;
  //   for (let i = countLimit; i < ele.length; i++) {
  //     $(ele[i]).hide();
  //   }
  //   $(".btn-viewmore").click(function () {
  //     if (isExpanded) {
  //       for (let i = ele.length - 1; i >= countLimit; i--) {
  //         $(ele[i]).slideUp();
  //       }
  //       isExpanded = false;
  //       $(this).html('Xem thêm <i class="fas fa-chevron-down"></i>');
  //     } else {
  //       for (let i = countLimit; i < ele.length; i++) {
  //         $(ele[i]).slideDown();
  //       }
  //       isExpanded = true;
  //       $(this).html('Ẩn bớt <i class="fas fa-chevron-up"></i>');
  //     }
  //   });
  // });
  function toggleItems(ele, countLimit, isExpanded, btnViewMore) {
    let newExpanded = !isExpanded;
    for (let i = countLimit; i < ele.length; i++) {
      if (newExpanded) {
        $(ele[i]).slideDown();
      } else {
        $(ele[i]).slideUp();
      }
    }

    isExpanded = newExpanded;
    if (isExpanded) {
      $(btnViewMore).hide();
    } else {
      $(btnViewMore).html('Xem thêm <i class="fas fa-chevron-down"></i>');
    }
  }
  $(document).ready(function () {
    let ele1 = $(".widget-origin .form-group");
    let countLimit1 = 5;
    let isExpanded1 = false;
    for (let i = countLimit1; i < ele1.length; i++) {
      $(ele1[i]).hide();
    }
    $(".btn-view-origin").click(function () {
      toggleItems(ele1, countLimit1, isExpanded1, this);
    });

    let ele2 = $(".widget-type .form-group");
    let countLimit2 = 5;
    let isExpanded2 = false;
    for (let i = countLimit2; i < ele2.length; i++) {
      $(ele2[i]).hide();
    }
    $(".btn-view-type").click(function () {
      toggleItems(ele2, countLimit2, isExpanded2, this);
    });
    let ele3 = $(".widget-swing .form-group");
    let countLimit3 = 5;
    let isExpanded3 = false;
    for (let i = countLimit3; i < ele3.length; i++) {
      $(ele3[i]).hide();
    }
    $(".btn-view-swing").click(function () {
      toggleItems(ele3, countLimit3, isExpanded3, this);
    });
    //glass
    let ele4 = $(".widget-swing .form-group");
    let countLimit4 = 5;
    let isExpanded4 = false;
    for (let i = countLimit4; i < ele4.length; i++) {
      $(ele4[i]).hide();
    }
    $(".btn-view-glass").click(function () {
      toggleItems(ele4, countLimit4, isExpanded4, this);
    });
  });
}
