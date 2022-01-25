var products = document.getElementById('products');
var price = document.getElementById('price');
var type_ = document.getElementById('type_');
var color = document.getElementById('color');
var form = document.getElementById('form');

function validateforms() {
  if(products == "Textbook Level 1" || products == "Textbook Level 2" || products == "Textbook Level 3" || products == "1100 Short and Useful Korean Phrases" || products == "My First 500 Korean Words" || products == "Textbook Level 4-7") {
    if(products == "Textbook Level 1") {
      if(price == "Rp95.000") {
        if(type_ == "EBook" || type_ == "PDF") {
          if(color == "Original" || color == "Green" || color == "Red" || color == "Blue") {
            return true;
          }
          else {
            alert("Please Fill Out The Correct Product Details!");
            return false;
          }
        }
        else {
          alert("Please Fill Out The Correct Product Details!");
          return false;
        }
      }
      else {
        alert("Please Fill Out The Correct Product Details!");
        return false;
      }
    }
    if(products == "Textbook Level 2") {
      if(price == "Rp115.000") {
        if(type_ == "EBook" || type_ == "PDF") {
          if(color == "Original" || color == "Green" || color == "Red" || color == "Blue") {
            return true;
          }
          else {
            alert("Please Fill Out The Correct Product Details!");
            return false;
          }
        }
        else {
          alert("Please Fill Out The Correct Product Details!");
          return false;
        }
      }
      else {
        alert("Please Fill Out The Correct Product Details!");
        return false;
      }
    }
    if(products == "Textbook Level 3") {
      if(price == "Rp120.000") {
        if(type_ == "EBook" || type_ == "PDF") {
          if(color == "Original" || color == "Green" || color == "Red" || color == "Blue") {
            return true;
          }
          else {
            alert("Please Fill Out The Correct Product Details!");
            return false;
          }
        }
        else {
          alert("Please Fill Out The Correct Product Details!");
          return false;
        }
      }
      else {
        alert("Please Fill Out The Correct Product Details!");
        return false;
      }
    }
    if(products == "1100 Short and Useful Korean Phrases") {
      if(price == "Rp135.000") {
        if(type_ == "EBook" || type_ == "PDF") {
          if(color == "Original" || color == "Green" || color == "Red" || color == "Blue") {
            return true;
          }
          else {
            alert("Please Fill Out The Correct Product Details!");
            return false;
          }
        }
        else {
          alert("Please Fill Out The Correct Product Details!");
          return false;
        }
      }
      else {
        alert("Please Fill Out The Correct Product Details!");
        return false;
      }
    }
    if(products == "My First Korean Words") {
      if(price == "Rp125.000") {
        if(type_ == "EBook" || type_ == "PDF") {
          if(color == "Original" || color == "Green" || color == "Red" || color == "Blue") {
            return true;
          }
          else {
            alert("Please Fill Out The Correct Product Details!");
            return false;
          }
        }
        else {
          alert("Please Fill Out The Correct Product Details!");
          return false;
        }
      }
      else {
        alert("Please Fill Out The Correct Product Details!");
        return false;
      }
    }
    if(products == "Textbook Level 4-7") {
      if(price == "Rp475.000") {
        if(type_ == "EBook" || type_ == "PDF") {
          if(color == "Original" || color == "Green" || color == "Red" || color == "Blue") {
            return true;
          }
          else {
            alert("Please Fill Out The Correct Product Details!");
            return false;
          }
        }
        else {
          alert("Please Fill Out The Correct Product Details!");
          return false;
        }
      }
      else {
        alert("Please Fill Out The Correct Product Details!");
        return false;
      }
    }
  }
  else {
    alert("Please Fill Out The Correct Product Details!");
    return false;
  }
}