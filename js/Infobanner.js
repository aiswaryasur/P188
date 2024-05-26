AFRAME.registerComponent("info-banner", {
    init: function () {
      this.placesContainer = this.el;
      this.createBanner()
      
    },
   
    createBanner: function () {
      const thumbNailsRef = [
        {
          id: "basil",
          url: "./assets/posters/basil.jpg",
          title:"basil",
          description:'Basil contains nutrients and compounds that can help stave off chronic diseases, including cancer, diabetes, heart disease and arthritis, basil has antibacterial and anti-inflammatory benefits.'
        },
        {
          id: "thyme",
          url: "./assets/posters/thyme.jpg",
          title:'thyme',
          description:'Flowers, leaves, and oil of thyme plant are commonly used to flavor foods and are also used as medicine. Thyme contains chemicals that might help bacterial and fungal infections.'
        
        },
        {
          id: "parsley",
          url: "./assets/posters/parsley.jpg",
          title:'parsley',
          description:'Parsley vitamin K is important because it helps blood to clot in addition to contributing to bone health. Parsley is rich in vitamin C and other antioxidants, which help reduce the risk of serious health conditions like diabetes, stroke, heart disease and cancer. '
        },
        {
          id: "oregano",
          url: "./assets/posters/oregano.jpg",
          title:"oregano",
          description:'Oregano belongs to the Lamiaceae family (mint family), which includes over 200 genera. The plants of this family are mainly used for culinary, medicinal, ornamental and fragrance purposes'
        },
        
      ];
      const backgroundEl = this.createBackground()
      const descriptionEl = this.createDescriptionEl(item)
      const titleEl = this.createTitleEl(item);
      backgroundEl.appendChild(titleEl);
    },
    createBackground:function(){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
          primitive:'plane',
          width:50,
          height:50
        })
        entityEl.setAttribute("position", { x: 0, y: 0, z: 0 });
        entityEl.setAttribute('material',{
          color:'#000000'
        }) 
        return entityEl
      },
    createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#ffffff",
          value: item.title,
        });
        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
        entityEl.setAttribute("visible", true);
        
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 45,
          color: "#fff",
          value: item.description,
        });
        entityEl.setAttribute("position",{ x: 0, y: -2, z: 0.1});
        entityEl.setAttribute("visible", true);
        
        return entityEl;
      },
    
  });
  