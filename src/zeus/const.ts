/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	DialogueRole: "enum" as const,
	DialogueInput:{
		role:"DialogueRole"
	},
	Query:{
		suggestionUnivesties:{

		}
	},
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
	},
	University:{
		name:"String",
		paths:"Path",
		website:"String"
	},
	Query:{
		listJobs:"String",
		suggestionUnivesties:"Path"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}