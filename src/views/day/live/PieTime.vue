<script lang="ts">
import LatteMermaid from '../../../components/LatteMermaid.vue'
import { ElDatePicker, emitChangeFn } from 'element-plus';
import {ref} from 'vue'
import axios from "axios"


function formatDate(date: Date):string {
    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, '0');

    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
} 
export default {
  components: {
    LatteMermaid
  },
  mounted() {

  },
  methods: {
    changeTime() {
        console.log(this.date)
        this.loadNotion(this.date);
    },
    loadNotion() {
        if (this.date == '' || this.date == null) return;
        let now = new Date(this.date);
        let yesterday = new Date(this.date);
        yesterday.setDate(yesterday.getDate() -1);
        console.log(formatDate(yesterday))
        const self = this;
        axios.post("https://api.notion.com/v1/databases/a5cd5d9a817f4834a57fbf2c477ccb59/query",
        {
            "filter": {
                "and": [
                    {
                        "property": "结束时间",
                        "date": {
                            "on_or_after": formatDate(yesterday)
                        }
                    },
                    {
                        "property": "结束时间",
                        "date": {
                            "on_or_before": formatDate(now)
                        }    
                    }
                ]
            }
        },{   
            headers: {
            "Authorization": "Bearer secret_of0IRKXC84Zg9bpZmGSHM2yVT3N5v1iOtzingsmPltT",
            "Content-Type": "application/json",
                "Notion-Version": "2022-06-28"
            }
        }).then((result) => {
            console.log(result)
            if (result.status == 200) {
                self.tableData = [];
                const tasks = new Map();

                result.data.results.forEach(element => {
                    const name = element.properties["名称"].title[0].text.content;
                    const startDate = element.properties["开始时间"].date.start;
                    const endDate = element.properties["结束时间"].date.start;
                    self.tableData.push({
                        name,
                        startDate,
                        endDate 
                    })
                    
                    tasks[name] = (tasks[name] != null? tasks[name] : 0 )+ new Date(endDate).getTime() - new Date(startDate).getTime();
                });

                let code1 = "pie\n";
                let all = 24 * 60 * 60 * 1000;
                for (let key in tasks) {
                    code1 += '"' + key + '": ' + tasks[key] + "\n";
                    all -= tasks[key];
                }
                if (all > 0) {
                    code1 += '"其他": ' + all + "\n";
                }
                
                self.dayTime = code1;
                
            }
      
        });
    }
  },
  setup() {
    //const dayTime = `flowchart LR\nA[Hard] -->|Text| B(Round)\nB --> C{Decision}\nC -->|One| D[Result 1]\nC -->|Two| E[Result 2]`
    let dayTime = ref('pie \n "a":1')
    
    const date = ref('')
    const tableData = [];
    return {
      tableData,
      dayTime,
      date
    };
  }
}; 
</script>
<template>
    <el-date-picker v-model="date" type="date"  placeholder="选择日期" :change="changeTime()"/>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180"/>
        <el-table-column prop="startDate" label="StartDate" width="180" />
        <el-table-column prop="endDate" label="EndDate" width="180" />
        
    </el-table>
    <LatteMermaid :code="dayTime" @data-updated="handleDataUpdated"></LatteMermaid>
</template>
<style>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>