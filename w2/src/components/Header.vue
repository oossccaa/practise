<template lang="pug">
.header
  .logo
    .logo__image
      img(src='https://imgur.dcard.tw/L7LBqg8h.jpg')
    .logo__side
      img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png")
  .control.flex.items-center
    .ring(
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FS_-paKNoxOPJL-D_XRQYzN2hGXglCWq-6mNlDsEieq68Q9lnf54DGQBl9o-MLaRWSQ&usqp=CAU'
    )
    .avatar
      img(src='@/assets/avatar.png')
    .username 許范寧
    .logout
      img(
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAA6Ojr7+/swMDAODg7Pz8+WlpaGhobg4ODd3d3w8PDX19fa2trj4+Ovr6+0tLSmpqYpKSmenp6Pj49ZWVm/v79nZ2d4eHjo6Oju7u4kJCS6urqIiIhLS0tCQkIZGRl2dnZRUVFmZmZdXV02NjY+Pj655hBrAAAEY0lEQVR4nO2d21bbMBBF7dzBgTjkHgIBSvj/TywhXZSisVHs0ZE6Ofu1WZU3uloaebKMEEIIIYQQQgghhBBCCCHkP2Ozm632nV57DvvFQzmOrfOd8SjX5nVSxLb6pDs9qPt9sL6OrXZi+BTG78jqNrZdlg3uwvkdmccW1O9/3+ldxfQr3oILvlPGE7y9Rwjm+TSW4A3G751hHMFNH2YYpxa7oCZ6YhnBcIUUzPMtXHCKFcwf0YJbsGCeT8CGz3DDHLsQv8UL5g9QQ/Awc6ILFNzEEMxnQMNZ9WP0W1P5Xx+AhvKCuz/UeQ0odntZEbe1IY8zI8V+shNrEveuOJGK152vxNeWhWoRdayF0rWX/+JgBpsShW6iv6iSGgpq16YrlD3QL6XnlrJTL0WmcIvuBZiNH8J3hSqELrIKUMzALQY1mI7dokOsGa8xxUgIf9wQzefKLWYUoBgJGipBw4DQUAkaBoSGStAwIDRUgoYBoaESNAwIDZWg4TcKxc0wkKFwdlBpOFncPd13RjdKRYMMCzcisKKY8vMHC51dcZBh9ugUI+87f42t66tUI8rQCfe4F7va/N8faRzBoQyd0wPxENh5GoWwW5Rhtvy3kL34I/eYqL0izDAbfi3jSRxFpNPa1g0VZ/hllMxf5GFSPK1tO9wADbPiz2nsW1Xonhyk3LKhIg3fGS+Xg03lvz6Lhi1rEWxYz9x9mA9a9cWkDEv3Ydo31KQMhQPp9opJGdaE2DVvqGkZ1sTYNVZMyzDbVSs2baiJGcqT/omGk0ZqhnWKzRpqcobqtZieYZ1ik76YoKFyQ03RUFcxSUPVhpqmoaZiooaKDTVVQ71JI1lDtYZ6pmEXR92NunNq8QzD7nL90gHibpP/5Yy+6G+4DHxZ/zz8G6q3YfjL+ufhrehrmJpgnldv2TUyFH4Wmxddww7e4Ec8r4T7GSZYhd43p/wMq7Zq4+J32O9n+Av/+B743ZD0M3zFP74HfvezWIcn7PdD+2Op/fkwxUpUXtPYX5emp6j+bnEB74cX8I5/sjS9TwMm0l4bDvP7peb3vM2fW5g/ezJ/fqh7kp+goflzfPOxGObjaczHRJmPa6uJTWwcCp2Wofn4UvsxwvbjvC3E6hu/b2H+zoz5e0/m766Zv39o/w6p/XvA5u9y27+Pb/+bCva/i8FvmwSEhkrQMCA0VIKGAaGhEjQMCA2VoGFAaKgEDQNi39B+jhL7eWbi5QpCZc8D5XsSYsRR+Z7s5+yC5F0T8/PB8q7Zz51nP/9hZQ5LhaO7LIkclheQh9R+Lln7+YCj5HQGjjNHnvGG2LzcF5Bbve6WWBD0l4U/Ah5stnhDae0fDs9L2LpsqudmdaYxBLPsBiYYLUBXfAEIQKQaPFLIS3BlyniCGeLKfc/vcyThGAQeUsFrNZGhG2Gnxgq2M1NLd3oI47fWeaNWYTxSnxxfS/BS+0e2y9nqsdNrz2G/mJfADQtCCCGEEEIIIYQQQgghhJBU+A2OclmzYRJ3QgAAAABJRU5ErkJggg=='
      )
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 83.5px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menus {
  display: flex;
  &-link {
    padding: 20px;
    color: #007ed2;
  }
}
.logo {
  display: flex;
  img{
    width: 60px;
    height: 60px;
  }
}
.control{
  img{
    width: 60px;
    height: 60px;
  }
}
</style>