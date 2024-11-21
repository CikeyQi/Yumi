<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [{
		avatar: 'https://www.github.com/CikeyQi.png',
		name: '0卡苏打水',
		title: 'Developer',
    org: 'AiPreface',
    orgLink: 'https://github.com/AiPreface',
    desc: '主要负责人，主力开发',
		links: [{
				icon: 'github',
				link: 'https://github.com/CikeyQi'
			},
			{
				icon: 'twitter',
				link: 'https://twitter.com/CikeyQi'
			}
		]
	},
	{
		avatar: 'https://www.github.com/erzaozi.png',
		name: '二枣子',
		title: 'Developer',
    org: 'AiPreface',
    orgLink: 'https://github.com/AiPreface',
    desc: '副主要负责人，主力开发',
		links: [{
				icon: 'github',
				link: 'https://github.com/erzaozi'
			}
		]
	},
	{
		avatar: 'https://www.github.com/yhArcadia.png',
		name: '渔火Arcadia',
		title: 'Developer',
    org: 'AiPreface',
    orgLink: 'https://github.com/AiPreface',
    desc: '创始人（已跑路）',
		links: [{
				icon: 'github',
				link: 'https://github.com/yhArcadia'
			}
		]
	}
]
</script>

# 开发者

<VPTeamMembers size="small" :members="members" />