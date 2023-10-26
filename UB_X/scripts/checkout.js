    // Function to load cart data from localStorage
function loadCartFromStorage() {
    var storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
    }
}

// Function to calculate total price from the cart items
function calculateTotal() {
    var total = 0;
    cartItems.forEach(function (item) {
        total += item.price * item.quantity;
    });
    return total;
}

// Function to display the receipt summary
function displayReceiptSummary() {
    var subtotalElement = document.getElementById("subtotal");
    var totalElement = document.getElementById("total");

    var subtotal = calculateTotal();
    var shippingCost = 200; // Fixed shipping cost
    var total = subtotal + shippingCost;

    subtotalElement.textContent = `KSH ${subtotal.toFixed(2)}`;
    totalElement.textContent = `KSH ${total.toFixed(2)}`;
}

// Load cart data from localStorage
loadCartFromStorage();

// Display receipt summary
displayReceiptSummary();







  (function() {
  var countdown, init_countdown, set_countdown;

  countdown = init_countdown = function() {
    countdown = new FlipClock($('.countdown'), {
      clockFace: 'MinuteCounter',
      language: 'en',
      autoStart: false,
      countdown: true,
      showSeconds: true,
      callbacks: {
        start: function() {
          return console.log('The clock has started!');
        },
        stop: function() {
          return console.log('The clock has stopped!');
        },
        interval: function() {
          var time;
          time = this.factory.getTime().time;
          if (time) {
            return console.log('Clock interval', time);
          }
        }
      }
    });
    return countdown;
  };

  set_countdown = function(minutes, start) {
    var elapsed, end, left_secs, now, seconds;
    if (countdown.running) {
      return;
    }
    seconds = minutes * 60;
    now = new Date();
    start = new Date(start);
    end = start.getTime() + seconds * 1000;
    left_secs = Math.round((end - now.getTime()) / 1000);
    elapsed = false;
    if (left_secs < 0) {
      left_secs *= -1;
      elapsed = true;
    }
    countdown.setTime(left_secs);
    return countdown.start();
  };

  init_countdown();

  set_countdown(1, new Date());

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFNBQUEsRUFBQSxjQUFBLEVBQUE7O0VBQUEsU0FBQSxHQUFZLGNBQUEsR0FBaUIsUUFBQSxDQUFBLENBQUE7SUFDekIsU0FBQSxHQUFZLElBQUksU0FBSixDQUFjLENBQUEsQ0FBRSxZQUFGLENBQWQsRUFDWjtNQUFBLFNBQUEsRUFBVyxlQUFYO01BQ0EsUUFBQSxFQUFVLElBRFY7TUFFQSxTQUFBLEVBQVcsS0FGWDtNQUdBLFNBQUEsRUFBVyxJQUhYO01BSUEsV0FBQSxFQUFhLElBSmI7TUFLQSxTQUFBLEVBQ0U7UUFBQSxLQUFBLEVBQU8sUUFBQSxDQUFBLENBQUE7aUJBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWjtRQURLLENBQVA7UUFFQSxJQUFBLEVBQU0sUUFBQSxDQUFBLENBQUE7aUJBQ0osT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWjtRQURJLENBRk47UUFJQSxRQUFBLEVBQVUsUUFBQSxDQUFBLENBQUE7QUFDaEIsY0FBQTtVQUFRLElBQUEsR0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQWIsQ0FBQSxDQUFzQixDQUFDO1VBQzlCLElBQUcsSUFBSDttQkFDRSxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLElBQTlCLEVBREY7O1FBRlE7TUFKVjtJQU5GLENBRFk7QUFnQlosV0FBTztFQWpCa0I7O0VBb0I3QixhQUFBLEdBQWdCLFFBQUEsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFBO0FBRWhCLFFBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBO0lBQUksSUFBRyxTQUFTLENBQUMsT0FBYjtBQUNFLGFBREY7O0lBR0EsT0FBQSxHQUFVLE9BQUEsR0FBVTtJQUVwQixHQUFBLEdBQU0sSUFBSSxJQUFKLENBQUE7SUFDTixLQUFBLEdBQVEsSUFBSSxJQUFKLENBQVMsS0FBVDtJQUNSLEdBQUEsR0FBTSxLQUFLLENBQUMsT0FBTixDQUFBLENBQUEsR0FBa0IsT0FBQSxHQUFVO0lBRWxDLFNBQUEsR0FBWSxJQUFJLENBQUMsS0FBTCxDQUFXLENBQUMsR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQUEsQ0FBUCxDQUFBLEdBQXdCLElBQW5DO0lBRVosT0FBQSxHQUFVO0lBQ1YsSUFBRyxTQUFBLEdBQVksQ0FBZjtNQUNFLFNBQUEsSUFBYSxDQUFDO01BQ2QsT0FBQSxHQUFVLEtBRlo7O0lBSUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsU0FBbEI7V0FDQSxTQUFTLENBQUMsS0FBVixDQUFBO0VBbkJZOztFQXFCaEIsY0FBQSxDQUFBOztFQUNBLGFBQUEsQ0FBYyxDQUFkLEVBQWlCLElBQUksSUFBSixDQUFBLENBQWpCO0FBMUNBIiwic291cmNlc0NvbnRlbnQiOlsiY291bnRkb3duID0gaW5pdF9jb3VudGRvd24gPSAoKSAtPlxuICAgIGNvdW50ZG93biA9IG5ldyBGbGlwQ2xvY2sgJCgnLmNvdW50ZG93bicpLFxuICAgIGNsb2NrRmFjZTogJ01pbnV0ZUNvdW50ZXInLFxuICAgIGxhbmd1YWdlOiAnZW4nLFxuICAgIGF1dG9TdGFydDogZmFsc2UsXG4gICAgY291bnRkb3duOiB0cnVlLFxuICAgIHNob3dTZWNvbmRzOiB0cnVlXG4gICAgY2FsbGJhY2tzOlxuICAgICAgc3RhcnQ6ICgpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdUaGUgY2xvY2sgaGFzIHN0YXJ0ZWQhJ1xuICAgICAgc3RvcDogKCkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ1RoZSBjbG9jayBoYXMgc3RvcHBlZCEnXG4gICAgICBpbnRlcnZhbDogKCkgLT5cbiAgICAgICAgdGltZSA9IHRoaXMuZmFjdG9yeS5nZXRUaW1lKCkudGltZVxuICAgICAgICBpZiB0aW1lIFxuICAgICAgICAgIGNvbnNvbGUubG9nICdDbG9jayBpbnRlcnZhbCcsIHRpbWVcblxuICAgIHJldHVybiBjb3VudGRvd25cbiAgXG5cbnNldF9jb3VudGRvd24gPSAobWludXRlcywgc3RhcnQpIC0+XG5cbiAgICBpZiBjb3VudGRvd24ucnVubmluZ1xuICAgICAgcmV0dXJuXG5cbiAgICBzZWNvbmRzID0gbWludXRlcyAqIDYwXG5cbiAgICBub3cgPSBuZXcgRGF0ZVxuICAgIHN0YXJ0ID0gbmV3IERhdGUgc3RhcnRcbiAgICBlbmQgPSBzdGFydC5nZXRUaW1lKCkgKyBzZWNvbmRzICogMTAwMFxuXG4gICAgbGVmdF9zZWNzID0gTWF0aC5yb3VuZCAoZW5kIC0gbm93LmdldFRpbWUoKSkgLyAxMDAwXG5cbiAgICBlbGFwc2VkID0gZmFsc2VcbiAgICBpZiBsZWZ0X3NlY3MgPCAwXG4gICAgICBsZWZ0X3NlY3MgKj0gLTFcbiAgICAgIGVsYXBzZWQgPSB0cnVlXG5cbiAgICBjb3VudGRvd24uc2V0VGltZShsZWZ0X3NlY3MpXG4gICAgY291bnRkb3duLnN0YXJ0KClcbiAgICBcbmluaXRfY291bnRkb3duKClcbnNldF9jb3VudGRvd24oMSwgbmV3IERhdGUoKSlcbiJdfQ==
//# sourceURL=coffeescript