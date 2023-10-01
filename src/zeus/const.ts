/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	DialogueInput:{
		role:"DialogueRole"
	},
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueRole: "enum" as const,
	Query:{
		suggestionUnivesties:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	University:{
		name:"String",
		paths:"Path",
		website:"String"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		files:"String",
		fineTuneModel:"String",
		tuneId:"String"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	},
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
	},
	Query:{
		listJobs:"Job",
		suggestionUnivesties:"Path"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}