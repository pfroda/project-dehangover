// Set hangover color on Circle and Line
export function setHangoverColor(value) {
    if (value >= 7.5) return "#c0564a"
    if (value >= 5.0) return "#fdc52b"
    if (value >= 2.5) return '#ffe9ad'
    return "#81b44c"
    }

// Filter drinks by date on Stats
 export function filterDrinksByDate (drinks, filter) {
    if (filter === 'all') {
      return drinks;

  } else {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
        
      if (filter === 'week') {
        const oneWeekAgo = new Date(currentDate);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return drinks.filter((drink) => new Date(drink.dateConsumed) >= oneWeekAgo);

      } else if (filter === 'month') {
        const oneMonthAgo = new Date(currentDate);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return drinks.filter((drink) => new Date(drink.dateConsumed) >= oneMonthAgo);

      } else if (filter === 'year') {
        const oneYearAgo = new Date(currentDate);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return drinks.filter((drink) => new Date(drink.dateConsumed) >= oneYearAgo);
        }
    }
}

// Filter hangovers by date on Stats
export function filterHangoversByDate (userHangovers, filter) {
    if (filter === 'all') {
    return userHangovers;
      
  } else {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
  
      if (filter === 'week') {
        const oneWeekAgo = new Date(currentDate);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return userHangovers.filter((hangover) => new Date(hangover.createdAt) >= oneWeekAgo);

      } else if (filter === 'month') {
        const oneMonthAgo = new Date(currentDate);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return userHangovers.filter((hangover) => new Date(hangover.createdAt) >= oneMonthAgo);
        
      } else if (filter === 'year') {
        const oneYearAgo = new Date(currentDate);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return userHangovers.filter((hangover) => new Date(hangover.createdAt) >= oneYearAgo);
      }
    }       
    }