const $ = jQuery;



$.fn.tableScrollX = function (params) {

  params = params || {};
  params.fixedCellsSelector = params.fixedCellsSelector || 'th';

  $(this).each(function () {

    const $original = $(this);
    const $fixed = $original.clone();
    const $wrapper = $('<div class="table-scroll-x--wrapper"/>');
    const $wrapper2 = $('<div class="table-scroll-x--wrapper2"/>').append($wrapper);

    $original.before($wrapper2);
    $wrapper.append($original);
    $fixed.addClass('table-scroll-x--fixed');
    $original.before($fixed);

  });

  return this;
};