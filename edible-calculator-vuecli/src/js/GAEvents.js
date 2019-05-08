import VueAnalytics from 'vue-analytics'

export default class GAEventHandler {
    ga;

    constructor (_ga) {
      this.ga = _ga
    }
    SendFirstInteraction = function (EventSpecs) {
      const DefaultEvent = {
        eventCategory: 'app',
        eventAction: 'First Interaction',
        eventLabel: 'Unspecified app'
      }

      const Event = {
        ...DefaultEvent,
        ...EventSpecs
      }

      this.ga.event(Event) // Sends the event to Google Analytics
      console.log('Event sent to Google Analytics: ', Event)
    }
}
