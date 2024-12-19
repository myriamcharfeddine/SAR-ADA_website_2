(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from') || 0,
                to: parseFloat($(this).data('to')),
                speed: $(this).data('speed') || 1500,
                refreshInterval: $(this).data('refresh-interval') || 100,
                decimals: 4
            }, options);

            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            if (data.interval) {
                clearInterval(data.interval);
            }

            data.interval = setInterval(updateTimer, settings.refreshInterval);
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);

                if (loopCount >= loops) {
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    render(value);
                }
            }

            function render(value) {
                // Convert the number to a string and remove trailing zero
                var formattedValue = parseFloat(value.toFixed(5)).toString();
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0
    };
})(jQuery);

jQuery(function ($) {
    $('.timer').each(function () {
        var $this = $(this);
        $this.countTo();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count-number');
  
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-to'));
      const speed = parseInt(counter.getAttribute('data-speed'), 10);
      let count = 0;
      const step = target / (speed / 10);
  
      function updateCounter() {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.textContent = count.toFixed(2);
      }
  
      const interval = setInterval(updateCounter, 10);
    });
  });
  