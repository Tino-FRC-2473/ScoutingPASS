var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Scoring capability",
      "code": "wid",
      "type": "radio",
      "choices": {
        "a": "Amp<br>",
        "s": "Speaker<br>",
        "b": "Both<br>"
      }
    },
    { "name": "Can they hang from chain?",
      "code": "wei",
      "type": "radio",
      "choices": {
        "yes_chain": "Yes with harmony<br>",
        "half_chain": "Yes but no harmony<br>",
        "no_chain": "No<br>"
      }
    },
    { "name": "Average Cycle time",
      "code": "drv",
      "type": "number"
    },
    { "name": "Average Cycles",
      "code": "drv",
      "type": "number"
    },
    { "name": "Pickup",
      "code": "odt",
      "type": "radio",
      "choices": {
        "g_pickup": "Ground<br>",
        "s_pickup": "Source<br>",
        "b_pickup": "Both<br>"
      }
    },
    { "name": "Can score trap?",
      "code": "sr",
      "type": "radio",
      "choices": {
        "y_trap": "Yes<br>",
        "n_trap": "No<br>"
      }
    },
    { "name": "Auto strat",
      "code": "mot",
      "type": "text"
    },
    { "name": "Additional notes<br>(eg. what do they generally do/specialize in?)",
      "code": "mot",
      "type": "text"
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
