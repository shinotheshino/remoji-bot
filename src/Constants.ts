/*
  Remoji - Discord emoji manager bot
  Copyright (C) 2021 Shino <shinotheshino@gmail.com>.

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import eris from "eris";
import child_process from "child_process";

const Constants = Object.freeze({
  supportServerInvite: "https://discord.gg/QmWcB94Qmt",
  topGG: "https://top.gg/bot/781606551349231667",
  requiredPermissions:
    eris.Constants.Permissions.manageEmojis |
    eris.Constants.Permissions.readMessages |
    eris.Constants.Permissions.sendMessages |
    eris.Constants.Permissions.embedLinks |
    eris.Constants.Permissions.attachFiles |
    eris.Constants.Permissions.externalEmojis,
  version: "1.1.1",
  git: Object.freeze({
    branch: child_process.execSync("git rev-parse --abbrev-ref HEAD").toString("utf8").trim(),
    commit: child_process.execSync("git rev-parse --short HEAD").toString("utf8").trim(),
  }),
  stati: [
    {
      type: 5 as eris.BotActivityType,
      name: "discord",
    },
    {
      type: 5 as eris.BotActivityType,
      name: "emoji management",
    },
    {
      type: 2,
      name: "e/help",
    },
    {
      type: 0,
      name: "with emojis | e/help",
    },
    {
      type: 0,
      name: "KEKW | e/help",
    },
    {
      type: 0,
      name: "emoji management | e/help",
    },
    {
      type: 0,
      name: "with Shino | e/help",
    },
    {
      type: 0,
      name: "vote for Remoji on top.gg! | e/help",
    },
    {
      type: 1,
      name: "Shino | e/help",
      url: "https://twitch.tv/shinotheshino",
    },
    {
      type: 0,
      name: "What's ba-lug-na? | e/help",
    },
    {
      type: 0,
      name: "Wait, you're a Redditor *and* a Discord mod??? omg :flushed: | e/help",
    },
    {
      type: 0,
      name: "not related to remoji.com | e/help",
    },
    {
      type: 0,
      name: "Join the support server! | e/help",
    },
    {
      type: 0,
      name: "How are you today? :) | e/help",
    },
    {
      type: 0,
      name: "Stealing emotes since November 2020 | e/help",
    },
  ] as eris.ActivityPartial<eris.BotActivityType>[],
});

export default Constants;
