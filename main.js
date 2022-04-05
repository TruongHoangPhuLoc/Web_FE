 $(document).ready(function()
{
	 $(".btn-primary").each(function(){
		 $(this).text("Mua Hàng");
		 
	 })
	 
	 function product(id,name,type,price,url)
	 {
		this.id = id;
		this.name = name;		
		this.price = price;
		this.url = url;
		this.type = type;
	 }
	 function order(product, n)
	 { 
		this.product = product;
		 this.n = n;
	 }
	 
	 
	
	 products = [];
	 products[0] = new product("table1","Bàn Ăn LAHA Gỗ Sồi","table","3.790.000","images/table/table1.jpg");
	 products[1] = new product("table3","Bàn Ăn LAHA Gỗ Cao Su","table","3.190.000","images/table/table3.jpg");
	 products[2] = new product("table2","Bộ Bàn Trà LAHA","table","1.148.000","images/table/table2.webp");
	 products[3] = new product("table4","Bàn Ăn LAHA Truyền Thống","table","1.990.000","images/table/table4.webp");
	 products[4] = new product("table5","Bộ Bàn Ăn 4 Ghế Gỗ Cao Su LAHA","table","5.990.000","images/table/table5.webp");
	 products[5] = new product("table6","Bàn Ăn Gỗ Cao Su LAHA Màu Gỗ","table","6.190.000","images/table/table6.jpg");
	 products[6] = new product("sofa1","Ghế SOFA LAHA Gỗ Cao Su Màu Gỗ Tự Nhiên","sofa","5.990.000","images/sofa/sofa1.jpg");
	 products[7] = new product("sofa2","Ghế SOFA LAHA Gỗ Cao Su Màu Nâu","sofa","7.990.000","images/sofa/sofa2.jpg");
	 products[8] = new product("sofa3","Ghế SOFA LAHA Gỗ Cao Su","sofa","7.990.000","images/sofa/sofa3.jpg");
	 products[9] = new product("sofa4","Bàn sofa - Bàn cafe - Bàn Trà LAHA Gỗ Sồi","sofa","1.990.00","images/sofa/sofa4.webp");
	 products[10] = new product("sofa5","Ghế SOFA LAHA Gỗ Cao Su MILAN","sofa","7.990.000","images/sofa/sofa5.png");
	 products[11] = new product("sofa6","Bàn Ăn SOFA LAHA Gỗ Cao Su MILAN Màu Gỗ","sofa","6.190.000","images/sofa/sofa6.jpg");
	 products[12] = new product("tvtable1","Tủ Kệ Tivi LAHA Gỗ Màu Gỗ Phối Trắng","tvtable","2.490.000","images/tvtable/tvtable1.jpg");
	 products[13] = new product("tvtable2","Tủ Kệ Tivi LAHA Gỗ Sồi MILAN","tvtable","4.490.000","images/tvtable/tvtable2.jpg");
	 products[14] = new product("tvtable3","Tủ Kệ Tivi LAHA Gỗ Trầm","tvtable","3.990.000","images/tvtable/tvtable3.jpg");
	 products[15] = new product("tvtable4","Tủ kệ Tivi LAHA Gỗ Sồi Màu Gỗ Tự Nhiên","tvtable","3.990.000","images/tvtable/tvtable4.webp");
	 products[16] = new product("tvtable5","Tủ Kệ Tivi LAHA Gỗ Sồi VERONA","tvtable","3.490.000","images/tvtable/tvtable5.jpg");
	 products[17] = new product("tvtable6","Tủ Kệ Tivi LAHA Gỗ Sồi","tvtable","4.490.000","images/tvtable/tvtable6.webp");
	 products[18] = new product("sale1","Ghế Sắt LAHA Cafe Ngoài Trời","sale","999.000","images/salesimg/sale1.webp");
	 products[19] = new product("sale2","Ghế Bằng Dài LAHA Gỗ Tràm","sale","299.000","images/salesimg/sale2.jpg");
	 products[20] = new product("sale3","Bàn Cafe - Bàn Sofa - Bàn Trà Tròn LAHA Màu Trắng","sale","1.290.000","images/salesimg/sale3.webp");
	 products[21] = new product("sale4","Bàn Ăn - Bàn Làm Việc LAHA Gỗ Sồi Tự Nhiên","sale","4.990.000","images/salesimg/sale4.jpg");
	 products[22] = new product("sale5","Tủ Kệ Tivi LAHA Mini","sale","499.000","images/salesimg/sale5.jpg");
	 products[23] = new product("sale6","Ghế LAHA LAMLEY Gỗ Tràm","sale","799.000","images/salesimg/sale6.webp");
	 orders = InitializeOrders();
	 changeOrderButton(InitializeCount(orders));
	 
	 function InitializeCount(orders)
	 {
		 var count = 0;
		 if(orders.length != 0)
		 {
			 for(var i = 0;i<orders.length;i++)
		 	{
				count += parseInt(orders[i].n);
		 	}
		 }
		 return count;
	 }
	 $("#find-button").bind('click',function(e)
		{
		 ClearSection(e);					
		 find();
		
		 
 })
function find()
	 {
		 var value = GetValue();
		 if(value != "")
			 {
				
				 $("section").append(`<h2 class ="text-center"> Danh sách tìm kiếm </h2>`);
				 $("section").append(`<div class ="container" id="find-id">`);
				 $("#find-id").append(`<div class="row text-center" id="row-find">`)
				 for(var i = 0;i<products.length;i++)
					 {
						
						 if(Search(removeVietnameseTones(products[i].name).toUpperCase(),removeVietnameseTones(value).toUpperCase()))
							 {
								 console.log(products[i].name.indexOf(value));
								 
								 $("#row-find").append(`
			
			
			<div class="col-md-4 pb-1 pb-md-0"style="margin-top:20px">
			<div class="card">
            <img class="card-img-top" src="${products[i].url}" alt="Card image cap">
            <div class="card-body" style="text-align: center">
              <h5 class="card-title">${products[i].price}</h5>
              <p class="card-text">${products[i].name}</p>
              <a href="#" class="btn btn-primary" id ="${products[i].id}">Mua Hàng</a>
            </div>
          	</div>
			</div>`)
							 }
					 }
				 
			 }
		 
		 AddToCart();
	 }
	 
function Search(string, value)
	 {
		 for(var i = 0;i<string.length;i++)
			 {
				 if(string[i] == value[0])
					 {
						 var count = 0;
						 for(var j = 0, k = i;j<value.length;j++,k++)
							 {
								 if(string[k] != value[j])
									 {
										 break;
									 }
								 else
									 {
										 count++;
									 }
							 }
						 if(count == value.length)
							 {
								 return true;
							 }
					 }
			 }
		 return false;
	 }
 
function GetValue()
	 {
		 var value = $(".form-control").val();
		 console.log(value);
		 return value;
	 }
	 
 function ClearSection(e)
	 {
		 $("section").empty();
		 e.preventDefault();
	 }
 function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}

	 

	 
	 
	 
	 
	 
 $(".btn").each(function(index){
	 $(this).bind('click',function(e){
		 var id = $(this).attr("id");
		 var count = InitializeCount(orders);
		 for(var i = 0;i<products.length;i++)
			 {
				 var key = products[i].id;
				 
				 if(key == id)
					 {
						var ord = new order(products[i],"1");
						if(!isExist(products[i]))
							{
								pushOrder(ord);							}
						 else
							 {
								 IncreaseValue(products[i]);
							 }
						 count++;
						changeOrderButton(count);
						PushIntoLocalStorage(orders);
					 }
				 
			 }
		 e.preventDefault();
		 
	 })
 })
	 function AddToCart()
	 {
		  $(".btn").each(function(index){
			  console.log(this);
	 $(this).bind('click',function(e){
		 var id = $(this).attr("id");
		 var count = InitializeCount(orders);
		 for(var i = 0;i<products.length;i++)
			 {
				 var key = products[i].id;
				 
				 if(key == id)
					 {
						var ord = new order(products[i],"1");
						if(!isExist(products[i]))
							{
								pushOrder(ord);							}
						 else
							 {
								 IncreaseValue(products[i]);
							 }
						 count++;
						changeOrderButton(count);
						PushIntoLocalStorage(orders);
					 }
				 
			 }
		 e.preventDefault();
		 
	 })
 })
	 }
	 function isExist(product)
	 {
		 for(var i = 0;i<orders.length;i++)
			 {
				 if(product.id == orders[i].product.id)
					 {
						 return true;
					 }
			 }
		 return false;
	 }
	 function IncreaseValue(product)
	 {
		 for(var i = 0;i<orders.length;i++)
			 {
				 if(orders[i].product.id == product.id)
					 {
						 orders[i].n = parseInt(orders[i].n) + 1;
					 }
			 }
	 }
	 function DecreaseValue(product)
	 {
		 for(var i = 0;i<orders.length;i++)
			 {
				 if(orders[i].product.id == product.id)
					 {
						 orders[i].n = parseInt(orders[i].n) - 1;
					 }
			 }
	 }
	 function writeDataToModal()
	 {
		 
		for(var i = 0;i<orders.length;i++){
				 $("#myTable").append(`<tr>
										<td>${i+1}</td>
										<td>${orders[i].product.name}</td>
										<td>${orders[i].n}</td>
										<td>${orders[i].product.price}</td>
										<td><img src="${orders[i].product.url}" style="width:200px;height:200px"/></td>
										<td><input type="button" id = "${orders[i].product.id}_del" class = "${orders[i].product.id}_del" value="Xóa"></input></td>
										</tr>`)/*.ready(function(){
				$("tr>td>input").off("click").on("click",function(e){
					var btn = $(this).attr("class");
					console.log(btn);	
					var id = $(this).attr("class");
					//console.log(id);
					var count = InitializeCount(orders);
					for(var i = 0;i<orders.length;i++)
						{
							var str = orders[i].product.id+"_del";
							if(id==str)
								{
									if(orders[i].n == 1)
									{
										orders.splice(i,1);
									}
									else if(orders[i].n > 1)
									{
										DecreaseValue(orders[i].product);	
									}
									clearModal();
									count --;
									writeDataToModal();
									changeOrderButton(count);
									
								}
							if(orders.length == 0)
								{
									hideModal();
								}
					
						}
						

			});
		});*/
		}
		
	 
		var sum = SumOfOrders();
		 var money = FormatIntToVND(sum);
		 $("tr:eq(1)").append(`<td rowspan = "${orders.length}">${money}</td`);
		 //$("#myTable").append().ready(Del);
		 Del(	);
	 }
	 
	 function FormatStringToInt(str)
	 {
		 if(Search(str,"."))
		{
		 var n = parseInt(str.split(".").join(""));
		 return n;
		}
		 else
			 {
				 return parseInt(str);
			 }
	 }
	 function InsertPoint(list,index)
	 {
		 for(var i = list.length;i>index;i--)
			 {
				 list[i] = list[i-1];
			 }
		 list[index] = ".";
	 }
	 function FormatIntToVND(n)
	 {
		 var str = n.toString();
		 var list = [];
		 for(var i = 0;i<str.length;i++)
			 {
				 list[i] = str[i];
			 }
		 for(var i = list.length - 3; i>0; i-=3)
			 {
				 InsertPoint(list,i);
			 }
		 str = list.join("");
		 str = str.toString();
		 return str;
	 }
	 function SumOfOrders()
	 {
		 var sum = 0;
		 for(var i = 0;i<orders.length;i++)
			 {
				 sum+= FormatStringToInt(orders[i].product.price)*orders[i].n;
			 }
		 return sum;
	 }
	 
	 function pushOrder(ord)
	 {
		 orders.push(ord);
	 }
	 function Del()
	 {
		 $("input").each(function()
						{
			 $(this).bind("click",function(){
				 					var btn = $(this).attr("class");
					console.log(btn);	
					var id = $(this).attr("class");
					//console.log(id);
					var count = InitializeCount(orders);
					for(var i = 0;i<orders.length;i++)
						{
							var str = orders[i].product.id+"_del";
							if(id==str)
								{
									if(orders[i].n == 1)
									{
										orders.splice(i,1);
									}
									else if(orders[i].n > 1)
									{
										DecreaseValue(orders[i].product);	
									}
									clearModal();
									count --;
									writeDataToModal();
									changeOrderButton(count);
									PushIntoLocalStorage(orders);
									
								}
							if(orders.length == 0)
								{
									hideModal();
								}
					
						}
						
			 })
		 })
	 }
 
	 function changeOrderButton(value)
	 {
		 if(value>0)
			 {
				 $("#order").text(value);
				 $("#order").css({"display":"inline"});
			 }
		 else
			 {
				 $("#order").text(value);
				 $("#order").css({"display":"none"});
			 }
	 }

	 $("#modal-button").bind("click",function(e){
		if(orders.length)
		{
		 clearModal();
		writeDataToModal();
		 $("#myModal").modal("show");
		}
		 else
			 {
				 alert("Giỏ hàng đang trống");
			 }
	 });
	 function hideModal()
	 {
		
		 $("#myModal").modal("hide");
	 }
	 $("#close").bind("click",function(e)
					 {
		 hideModal();
	 });
	 $("#second-close").bind("click",function(e)
							{
		 hideModal();
	 });

	
	function clearModal()
	 {
		 var listTr = $("tr");
		 for(var i = listTr.length - 1; i >= 1 ; i--)
			 {
				
				  $(`tr:eq(${i})`).remove();	
			 }
	 }
	 function PushIntoLocalStorage(orders)
	 {
		 localStorage.setItem("orders",JSON.stringify(orders));
	 }
	 function InitializeOrders()
	 {
		 var orders = JSON.parse(localStorage.getItem("orders"));
		 if(orders == null)
			 {
				 orders = [];
			 }
		 return orders;
	 }
	 function clearStorage()
	 {
		 localStorage.clear();
	 }
	 $("#submit-orders").bind("click",function()
							 {
		clearStorage();
		window.location.reload();
	 })
	 $(".dropdown-item").bind("click",function()
							 {
		 PushIntoLocalStorage(orders);
		 
	 })

	 $("#myModal").change(function(){
		 alert("da thay doi");
	 });
 });