AFRAME.registerComponent("herbs", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "basil",
        url: "./assets/posters/basil.jpg",
      },
      {
        id: "thyme",
        url: "./assets/posters/thyme.jpg",
      },

      {
        id: "parsley",
        url: "./assets/posters/parsley.jpg",
      },
      {
        id: "oregano",
        url: "./assets/posters/oregano.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 0;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      
      // Thumbnail Element
     const thumbnailEl = this.createThumbnail(item)
     borderEl.appendChild(thumbnailEl)

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute('id',id)
    entityEl.setAttribute('visible',true)
    entityEl.setAttribute('geometry',{
      primitive:'plane',
      width:22,
      height:30
    })
    entityEl.setAttribute('position',position)
    entityEl.setAttribute('material',{
      color:'#fff',
      opacity:1
    })
    entityEl.setAttribute("cursor-listener", {});
    return entityEl
  },
  createThumbnail:function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute('visible',true)
    entityEl.setAttribute('geometry',{
      primitive:'plane',
      width:20,
      height:28
    })
    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
    entityEl.setAttribute('material',{
      src:item.url
    }) 
    return entityEl
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      align: "center",
      width: 70,
      color: "#000000",
      value: item.id,
    });
    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },
  
});
