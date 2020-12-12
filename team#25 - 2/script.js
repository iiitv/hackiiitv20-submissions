document.getElementById("register").addEventListener("click", (e) => {
    e.preventDefault();
});

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
});



    class Node{
        constructor(n, pass, ph, eph, aadh)
        {
            this.name = n;
            this.password = pass;
            this.phone = ph;
            this.ephone = eph;
            this.aadhaar = aadh;
            this.next = null;
        }
    }

    class LinkList{
        constructor()
        {
            this.head = null;
        }

        add(n, pass, ph, eph, aadh)
        {
            var newNode = new Node(n, pass, ph, eph, aadh);
            
            if(this.head == null)
            {
                this.head = newNode;
            }
            else{
                var curr = this.head;
                while(curr.next != null)
                {
                    curr = curr.next;
                }
                curr.next = newNode;
            }
        }

        search(n, pass)
        {
            var curr = this.head;
            var flag1 = 0;
            var flag2 = 0;

            while(curr != null)
            {
                if(curr.name == n)
                {
                    flag1 = 1;
                    id = n;
                    break;
                }
                else{
                    curr = curr.next;
                }   
            }

            while(curr != null)
            {
                if(curr.password == pass)
                {
                    flag2 = 1;
                    p = pass;
                    break;
                }
                else{
                    curr = curr.next;
                }   
            }

            if(flag1 == 1 && flag2 == 1)
            {
                console.log("true");
                location.replace("button.html");
            }
            else{
                console.log("false");
                alert("Wrong name or password");
            }
        }

        print()
        {
            var curr = this.head;
            var n = "";
            var pass = "";
            var ph = "";
            var eph = "";
            var aadh = "";
            
            while(curr != null)
            {
                n += curr.name+" ";
                pass += curr.password+" ";
                ph += curr.phone+" ";
                eph += curr.ephone+" "; 
                aadh += curr.aadhaar+" ";
                curr = curr.next;
            }
           console.log(`Name = ${n}`);
           console.log(`password = ${pass}`);
           console.log(`phone = ${ph}`);
           console.log(`emergency phone = ${eph}`);
           console.log(`aadhaar = ${aadh}`);
        }
    }

    const LL = new LinkList();

    function myfunction(){

        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const phone = document.getElementById("phone").value;
        const ephone = document.getElementById("ephone").value;
        const aadhaar = document.getElementById("aadhaar").value;

        LL.add(name, password, phone, ephone, aadhaar);

    }

    function printfunction()
    {
        LL.print();
    }

    

    function valid()
    {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        LL.search(name, password);
    }