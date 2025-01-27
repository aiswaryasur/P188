AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
    update: function () {
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      c= fadeBackgroundEl.children;
      if (c.length > 0) {
      var i;
      for (i=0; i <= c.length; i++) {
      fadeBackgroundEl.removeChild(c[i]);
      }
      }
      else {
      this.handleMouseClickEvents();
      }
      },
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["basil", "thyme", "parsley", "oregano"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#1974DB",
          opacity: 1,
        });
      }
    },
    handleClickEvents:function(){
      //check the selected item to set the "info-banner" component on the plane
      if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
        itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", {x: 0, y: 0, z: -1});
        cursorEl.setAttribute("geometry", {
        radiusInner: 0.03,
        radiusOuter: 0.04,
        });
        } else {
        //else make the plane invisible
        fadeBackgroundE1.setAttribute("visible", false);
        titleEl.setAttribute("visible", true);
        cursorEl.setAttribute("position", {x: 0, y: 0, z: -3 });
        cursorEl.setAttribute("geometry", {
        radiusInner: 0.08,
        radiusOuter: 0.12,
        });
}
    },

    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId} = this.data
        if (selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute('id')
          if (id == selectedItemId){
            el.setAttribute("material",{
              color:"#fff",
              opacity:1
            })
          }
        }
      })
      
    },
  });
  