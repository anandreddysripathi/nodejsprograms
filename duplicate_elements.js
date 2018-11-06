arr=process.argv.slice(2);
 len=arr.length;
 var array=[];
for(i=0; i<len; i++)
   {
    for(j=i+1;j<len;j++)
    {
    if(Number(arr[i])==Number(arr[j]))
    {
     array.push(Number(arr[i]));
    }
   }
   }
   console.log("the duplicate elements found are : "+array);
   
   The output of the above program is:
   -----------------------------------
   C:\Users\ANAND\Operations>node index.js 6 2 3 4 6 1 4  3 1
   the duplicate elements found are : 6,3,4,1
