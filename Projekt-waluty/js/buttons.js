
// window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, FileSave);
$('#buttonGold').click(function(){
    
    window.webkitRequestFileSystem(window.TEMPORARY, 1024*1024, saveFile);
    function saveFile(localstorage){
        
        localstorage.root.getFile('info.txt', {create:'true'}, function(dataFile){
            dataFile.createWriter(function(dataContent){
                var blob = new Blob(['lol'], {type: 'text/plain'});
                dataContent.write(blob);
            });
        });
    }
});
